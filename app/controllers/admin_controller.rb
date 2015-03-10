class AdminController < ApplicationController
  
  before_action :admin_restriction
  

  def admin
    @pending_winner = Leaguewinner.where(["status = ? or status = ? ","active","pending"])
    @point_pending = Historypending.where(:historypending=> "true")
    @preseason = Preseason.where(:status=>"active")
    @season = Season.where(:status=>"active")
    @task = Task.where(:status=>"active")
    @user_count = User.count
    unless Season.count == 0
      if Season.last.status == "complete"
        if Season.last.leagues.where(:status=>"active").blank?
           @create_winner = "No"
        else
           @create_winner = "Yes"
        end
      end  
    end    
  end

  def pending_winners
    @pending_winner = Leaguewinner.where(["status = ? or status = ? ","active","pending"])
  end

  def complete_winners
    Leaguewinner.find(params[:id]).update_attributes(:status=>"complete")
    flash[:notice]="operation was complete"        
    respond_to do |format|
      format.html{redirect_to pending_winners_path}
    end       
  end

  def view_user
      @user_list = User.all.order("id DESC")
  end
  
  def league_winner
    league_season = 0
    for league in League.where(:status => "active")
      top_three = Season.league_top_three(league.id).to(2)
      point = 1
      for top_three_id in top_three
       unless UserInterest.where(["user_id = ? and interest_id = ?",top_three_id, league.interest_id])[0].point.blank?
         Leaguewinner.create(:user_id=>top_three_id, :league_id=> league.id, :position=> point, :status=>"active")
         point = point + 1
       end
      end
      league.update_attributes(:status=>"inactive")
      league_season = league.season
    end 
    unless league_season == 0
      SeasonWinnerNotification.create(:season_id=>league_season.id,:status=>"active")
    end 
    flash[:notice]="The winners were created"        
    respond_to do |format|
      format.html{redirect_to admin_path}
      format.js
    end 
  end
  
  def create_history
    #user history is created for all the enrolled user in all the leagues and the points table is cleard
    last_season = Season.last
    leagues = last_season.leagues
      for league in leagues
       unless league.interest.interest_name == "Random"
            user = league.users           
              for listed_user in user 
                unless UserInterest.where(["user_id = ? and interest_id = ?",listed_user.id, league.interest_id])[0].point.blank?
                  user_point = UserInterest.where(["user_id = ? and interest_id = ?",listed_user.id, league.interest_id])[0].point.point #+ listed_user.task_points.sum(:point)
                else
                  user_point = 0 #listed_user.task_points.sum(:point)
                end 
                if user_point == 0            
                  pointhistory = Pointhistory.new(user_id: listed_user.id,season_id:last_season.id,position:0, point: user_point,interest_id: league.interest.id)
                else
                  position = Season.league_table_admin(league.id,listed_user.id).last[1..-1].to_i
                  pointhistory = Pointhistory.new(user_id: listed_user.id,season_id:last_season.id,position: position, point: user_point,interest_id: league.interest.id)
                end
                if pointhistory.save and last_season.historypendings.last.update_attributes(:historypending=>"false")
                      flash[:notice]="History has been created"
                else
                      flash[:notice]="History wasn't created or an error occured"
                end
              end
        end        
      end
      Point.delete_all
      respond_to do |format|
            format.html{redirect_to admin_path}
            format.js
     end 
   end
  
  def start_season
    preseason = Preseason.find(params[:id])
    season = preseason.season 
    season_notification = SeasonWinnerNotification.where(:status=>"active")
    unless season_notification.blank?
      for notification in season_notification
        notification.update_attributes(:status=>"Inactive")
      end
      
    end
    if preseason.update_attributes(:status=>"inactive") and season.update_attributes(:status=>"active")
      for leagues in season.leagues
           leagues.update_attributes(:status=>"active")          
      end
      flash[:notice]="The season has started"
    else
      flash[:notice]="An error occured"
    end
    respond_to do |format|
            format.html{redirect_to admin_path}
            format.js
     end 
  end
  
  def create_season
    if request.post?
        @new_season = Season.new()
        @new_season.name = params[:name]
        @new_season.start_date = DateTime.new(params[:start_year].to_i,params[:start_month].to_i,params[:start_day].to_i)
        @new_season.end_date = DateTime.new(params[:end_year].to_i,params[:end_month].to_i,params[:end_day].to_i)
        @new_season.status = "Inactive"
        @new_season.description = params[:description]
        @new_season.first_place = params[:first_place]
        @new_season.second_place = params[:second_place]
        @new_season.third_place = params[:third_place]
        @new_season.fourth_place = params[:fourth_place]
        @new_season.fifth_place = params[:fifth_place]
        @new_season.other_positions = params[:other_positions]
        @preseason_start = DateTime.new(params[:pre_start_year].to_i,params[:pre_start_month].to_i,params[:pre_start_day].to_i)
        @new_season.build_preseason(start_day:@preseason_start, end_day:@new_season.start_date, status: "active")
        
        for interest in Interest.all.reject { |a| a == Interest.where(:interest_name => "Random")[0] } 
          # interest_members = interest.users
          # if interest_members.count < 11
          #   #add the formular to the leagues
          #   enrollment = 5
          #   cheer_limit = 0
          # else
          #   if interest_members.count > 10 and interest_members.count < 21 
          #       enrollment =  10
          #       cheer_limit = (interest_members/2).ceil
          #   else
          #     if interest_members.count > 20 and interest_members.count < 41 
          #       enrollment =  20
          #       cheer_limit = (interest_members/2).ceil
          #     else
          #       if interest_members.count > 20 and interest_members.count < 41 
          #         enrollment =  (interest_members/2).ceil
          #         cheer_limit = (interest_members/2).ceil
          #       end
          #     end
          #   end
          # end 
          @new_season.leagues.build(interest_id: interest.id, status: "inactive")          
        end 
        
        if @new_season.save
           flash[:notice]="The season was created"
        else
           flash[:notice]="An error occured"
        end
     end 
     
     respond_to do |format|
            format.html{redirect_to admin_path}
            format.js
     end 
  end
  
  
    def admin_task_checker
          #the purpose for this action is to update the tasks after the deadline has passed. 
          # 1) The task status is updated from active to inactive.
          # 2) All the Users are disenrolled from their enrolled tasks
          # 3) The winner of each task is calculated and stored in a winner table 
          # 4) A notification and news feed (directed to everyone on the site) is created 
          @task = Task.find(params[:id])
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
          @enrolled_users = @task.users
          @max_point = 0
          @winner = 0
          for task_point in @task.task_points
             if task_point.point > @max_point
                @winner = task_point.user_id
             end
             @max_point = task_point.point
          end
          
          unless @winner == 0 # This will help in a situation whereby there is no winner due to no vote
            unless @enrolled_users.count < 2 #This will help in a situation whereby only one person enrolls 
              @winner_instance = Winner.create(:user_id=>@winner, :task_id=>@task.id)
              @badges = Badge.all                          
              for badge in @badges
                if @winner_instance.user.winners.count == badge.priority 
                    BadgeAllocation.create(:user_id=>@winner, :badge_id=>badge.id, :task_name=>@task.title)
                end
              end
              if @winner_instance.user.winners.count > 5
                 BadgeAllocation.create(:user_id=>@winner,:badge_id=>Badge.where(:priority=> 5)[0].id,:task_name=>@task.title)
              end 
              #need optimization
              #_seasonFeed.find(task.feed.id).update_attributes(:created_at=>@winner_instance.created_at)
              Notification.create(:notification_type=>"Winner",:notification_type_id=>@winner_instance.id,:user_id=>@winner)
            end
          end
          respond_to do |format| 
           format.html{redirect_to admin_path}
           format.js
          end
    end
  
  
   private 
      def admin_restriction        
        if current_user.usertype == "normal"
           redirect_to stage_path
        end
      end  
end


       