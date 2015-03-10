module CompetitiveModule

  def cheer_creation(post,cheerer)
    league = post.label.interest.try(:leagues).try(:last)  
    unless league.blank?    
      if post.cheers.where(:league_id=>league.id).blank?
        cheer = Cheer.new()
        cheer.user_id = post.user.id
        cheer.cheerer_id = cheerer
        cheer.cheer_number = 1
        cheer.video_id = post.id
        cheer.league_id = league.id
        cheer.save
      end
    end
  end

  def task_point_allocator(post_author,post,point_value)
    unless post.label.blank? #if the post is tagged with aninterest
      if  post.task.status == "active" #if the user is enrolled in a task and task is still active
        user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",post_author.id, post.task.id])
        if  user_task_point.blank? # if the user doesnt have task points, create a new task point  
          TaskPoint.create(user_id:post_author.id,task_id:post.task.id,previous_point:point_value,point:point_value,status: 1)
          point_update = point_value #we need this for the notification
        else 
          user_task_point[0].update_attributes(:previous_point=> user_task_point[0].point, :point=> user_task_point[0].point + point_value)
          point_update = user_task_point[0].point + point_value
        end 
        return point_update 
      end 
    end
  end

  def league_point_allocation(post,post_author,point_value)
    unless post.label.blank? or post.label.interest.interest_name == "Random" #if the post isnt tagged with any interest
      user_interest_id = UserInterest.where(["user_id = ? and interest_id = ?",post_author.id, post.label.interest.id])
      if post.label.interest.leagues.last.season.status == "active" and post_author.leagues.include?(post.label.interest.leagues.last)
        if user_interest_id[0].point.blank?
          Point.create(user_id:post_author.id,previous_point:point_value,point:point_value, user_interest_id: user_interest_id[0].id,status: 1)
          point_flag = 0 #used for notification creation
          point_update = point_value 
        else 
          point_update =  user_interest_id[0].point 
          user_interest_id = UserInterest.where(["user_id = ? and interest_id = ?",post_author.id, post.label.interest.id])
          point_update.update_attributes(:previous_point=>point_update.point, :point=> point_update.point+point_value, :user_interest_id=>user_interest_id[0].id)
          point_flag = 0 #used for notification creation.
          point_update = point_update.point 
        end        
        if point_flag == 0
          last_notification = post_author.notifications.where("user_id=? AND notification_type=?", post_author.id,"Point").last
          unless last_notification.blank?
            if ((Time.now() - last_notification.updated_at)/60) > 30.0
              if last_notification.status == 0
                new_counter = point_update - last_notification.cheer_storage
                new_counter = new_counter + last_notification.notification_counter 
                last_notification.update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>new_counter)
              else
                if last_notification.cheer_storage.blank?
                  cheer_storage = 0.0
                else 
                  cheer_storage = last_notification.cheer_storage
                end
                last_notification.update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=> point_update - cheer_storage)
              end
            end
          else
            Notification.create(:cheer_storage=>point_update,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>point_update)
          end
        end
      end
      return point_update 
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
end 