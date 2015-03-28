module CompetitiveModule

  def cheer_creation(post,cheerer)
    league = post.label.interest.try(:leagues).try(:last)  
    unless league.blank?    
      cheer = Cheer.new()
      cheer.user_id = post.user.id
      cheer.cheerer_id = cheerer
      cheer.cheer_number = 1
      cheer.video_id = post.id
      cheer.league_id = league.id
      cheer.save
    end
  end

  def vote_creation(post,voter)
    task = post.try(:task) 
    unless task.blank? 
      vote = Vote.new()     
      vote.user_id = post.user.id 
      vote.voter_id = voter
      vote.vote_number = 1
      vote.video_id = post.id
      vote.task_id = task.id
      vote.save
    end
  end  

  def analyse_rank(point_update,post_author)
    unless point_update.blank?
      if post_author.rank.blank? 
        #creating a new rank if user doesnt already have rank
        rank = Rank.new()
        rank.user_id = post_author.id
        rank.rankdetail_id = 1
        rank.save
      else 
        rank = post_author.rank
        unless post_author.points.blank?
          task_points =  post_author.task_points.where(status: 1)
          league_points =  post_author.points.where(status: 1)
          point = 0 
          unless task_points.blank?
            for task_point in task_points
              point = point + task_point.point
            end
          end
          unless league_points.blank?
            for league_point in league_points
              point = point + league_point.point
            end
          end                         
          for rank_list in Rankdetail.all                           
           if  point > rank_list.rank_min_point
              new_rank = rank_list.id
           end
          end                         
          unless  new_rank == post_author.rank.rankdetail.id
            if rank.update_attributes(:rankdetail_id=>new_rank)
              Feed.create(feed_name: "Rank",user_id: post_author.id,rank_id:rank.id)
              Notification.create(:cheer_storage=>point_value,:notification_type=>"Rank",:notification_type_id=>new_rank,:user_id=>post_author.id,:notification_counter=>point_value)
            end
            #this will only change if the user was promoted to a new rank
          end
        end
      end 
    end
  end

  def finish_task(task_id)
    @task = Task.find(task_id)    
    @enrolled_users = @task.users
    @max_votes = 0 
    @winner  = 0
    for enrolled in @enrolled_users
      History.create(user_id: enrolled.id,competition_type:"task", task_id: task_id, position: get_task_position(enrolled.id, task_id), vote: get_vote(enrolled.id, task_id))
      @vote_count = enrolled.votes.where(:task_id=>task_id).inject(0){|sum,e| sum += e.vote_number}
      if @vote_count > @max_votes
        @winner = enrolled
      end
      @max_votes = @vote_count
    end
    if @task.update_attributes(:status=>"inactive") 
      flash[:notice]="task deactivated"
    else
      flash[:notice]="Oops something went wrong"
    end    
    unless @task.enrolls.blank?
      for enroll in @task.enrolls
        enroll.update_attributes(:status=>0)
      end 
    end
    unless @winner == 0
      if @enrolled_users.count > 1  
        @winner_object = Winner.create(:user_id=>@winner.id, :task_id=>@task.id)
        Point.create(:user_id=>@winner.id, :point_source=>"task",:point=>@task.task_reward,:previous_point=>task_previous_point(@winner.id))
        Notification.create(:notification_type=>"Winner",:notification_type_id=>@winner_object.id,:user_id=>@winner.id)
        Notification.create(:notification_type=>"Point", :point_count=>@task.task_reward,:user_id=>@winner.id)
        allocate_task_badges(@winner.id,@task.id)
      end
    end
  end 

  def get_user_league_position(league_id,user_id)
    user_contained = false
    league = League.find(league_id)
    enrolled_users = League.find(league_id).users.pluck(:id)
    if User.find(user_id).leagues.pluck(:id).include?(league_id)
      user_contained = true
    end
    unless enrolled_users.blank?
      if enrolled_users.length == 1
        if user_contained
          if User.find(user_id).cheers.where(["league_id = ?",league_id]).blank?
            return 0
          else
            return 1
          end
        end 
        return 0
      else
        i = enrolled_users.length - 1
        while i > 0 do
          first = 0 
          j = 1
          while j <= i do 
            first_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[j], league.id]).inject(0){|sum,e| sum += e.cheer_number}
            second_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[first], league.id]).inject(0){|sum,e| sum += e.cheer_number}
            if first_user_cheers.blank? 
              first = j
            else
              unless second_user_cheers.blank?
                if first_user_cheers <  second_user_cheers
                  first = j
                else
                  if first_user_cheers == second_user_cheers
                    enrollment_time_j = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[j]) , league_id: league_id}]).last.created_at
                    enrollment_time_first = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[first]) , league_id: league_id}]).last.created_at
                    if enrollment_time_j > enrollment_time_first
                      first = j
                    end 
                  end
                end
              end
            end
            j = j + 1
          end
          temp = enrolled_users[first]
          enrolled_users[first] = enrolled_users[i]
          enrolled_users[i] = temp
          i = i - 1
        end
        if User.find(user_id).cheers.where(["league_id = ?",league_id]).blank?
          return 0
        else  
          return enrolled_users.index(user_id) + 1 
        end
      end
    end
  end

  def league_enrollment(league_id)
    league = League.find(league_id)
    enrolled_users = league.users.pluck(:id)                      
    if enrolled_users.length == 1
      return enrolled_users     
    else
      i = enrolled_users.length - 1
      while i > 0 do
        first = 0 
        j = 1
        while j <= i do 
          first_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[j], league.id]).inject(0){|sum,e| sum += e.cheer_number}
          second_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[first], league.id]).inject(0){|sum,e| sum += e.cheer_number}
          if first_user_cheers.blank? 
            first = j
          else
            unless second_user_cheers.blank?
              if first_user_cheers <  second_user_cheers
                first = j
              else
                if first_user_cheers == second_user_cheers
                  enrollment_time_j = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[j]) , league_id: league_id}]).last.created_at
                  enrollment_time_first = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[first]) , league_id: league_id}]).last.created_at
                  if enrollment_time_j > enrollment_time_first
                    first = j
                  end 
                end
              end
            end
          end
          j = j + 1
        end
        temp = enrolled_users[first]
        enrolled_users[first] = enrolled_users[i]
        enrolled_users[i] = temp
        i = i - 1
      end
      return enrolled_users
    end
  end 

  def create_winners_and_assign_points(user_id,position,league)    
    if position == 1 
      point = league.season.first_place
      Leaguewinner.create(:user_id=>user_id, :league_id=> league.id, :position=> position, :status=>"active")
    else
      if position == 2
        point = league.season.second_place
        Leaguewinner.create(:user_id=>user_id, :league_id=> league.id, :position=> position, :status=>"active")
      else
        if position == 3
          point = league.season.third_place
          Leaguewinner.create(:user_id=>user_id, :league_id=> league.id, :position=> position, :status=>"active")
        else
          if position == 4
            point = league.season.fourth_place
            Leaguewinner.create(:user_id=>user_id, :league_id=> league.id, :position=> position, :status=>"active")
          else
            if position == 5
              point = league.season.fifth_place
              Leaguewinner.create(:user_id=>user_id, :league_id=> league.id, :position=> position, :status=>"active")
            else
              if position > 5
                point = league.season.other_positions
              end
            end
          end
        end
      end
    end
    Point.create(:user_id=>user_id, :point_source=>"league",:point=>point,:previous_point=>task_previous_point(user_id))
    Notification.create(:notification_type=>"Point", :point_count=>point,:user_id=>user_id)
  end 
  
  private 
    def task_previous_point(user_id)
      user = User.find(user_id)
      return user.points.last.point unless user.points.blank?
      return 0
    end

    def get_task_position(user_id, task_id)
      task_position = Task.task_table_position(task_id, user_id)
      if task_position == -1 or task_position == -2 or task_position== 0 or task_position == "blank"        
      else
        if Vote.where(["user_id = ? and task_id = ?",user_id, task_id]).blank?
          return 0 
        else
          return task_position
        end
      end
    end

    def get_vote(user_id, task_id)
      vote_count = Vote.where(["user_id = ? and task_id = ?",user_id, task_id]) 
      if vote_count.blank?
        return  0
      else
        return vote_count.inject(0){|sum,e| sum += e.vote_number} 
      end  
    end

    def allocate_task_badges(user_id,task_id)
      user = User.find(user_id)
      task = Task.find(task_id)
      @badges = Badge.all                          
      for badge in @badges
        if user.winners.count == badge.priority 
          BadgeAllocation.create(:user_id=>user.id, :badge_id=>badge.id, :task_name=>task.title)
        end
      end
      if user.winners.count > 5
        BadgeAllocation.create(:user_id=>user.id,:badge_id=>Badge.where(:priority=> 4)[0].id,:task_name=>task.title)
      end 
    end
end