class AdminController < ApplicationController
  
  before_action :admin_restriction
  

  def admin 
      @point_pending = Historypending.where(:historypending=> "true")
      if Season.last.status == "complete"
        if Season.last.leagues.where(:status=>"active").blank?
           @create_winner = "No"
        else
           @create_winner = "Yes"
        end
      end
  end
  
  
  def league_winner
    for league in League.where(:status => "active")
        top_three = Season.league_top_three(league.id).to(3)
        point = 1
        for top_three_id in top_three
           unless UserInterest.where(["user_id = ? and interest_id = ?",top_three_id, league.interest_id])[0].point.blank?
             Leaguewinner.create(:user_id=>top_three_id, :league_id=> league.id, :position=> point)
             point = point + 1
           end
        end
           league.update_attributes(:status=>"inactive")
    end 
        flash[:notice]="The winners were created"        
        respond_to do |format|
            format.html{redirect_to admin_path}
            format.js
        end 
  end
  
  def create_history
    last_season = Season.last
    leagues = last_season.leagues
      for league in leagues
       unless league.interest.interest_name == "Random"
            user = league.users           
              for listed_user in user 
                unless UserInterest.where(["user_id = ? and interest_id = ?",listed_user.id, league.interest_id])[0].point.blank?
                  user_point = UserInterest.where(["user_id = ? and interest_id = ?",listed_user.id, league.interest_id])[0].point.point + listed_user.task_points.sum(:point)
                else
                  user_point = listed_user.task_points.sum(:point)
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
        @new_season.incentive = params[:incentive]
        @preseason_start = DateTime.new(params[:pre_start_year].to_i,params[:pre_start_month].to_i,params[:pre_start_day].to_i)
        @new_season.build_preseason(start_day:@preseason_start, end_day:@new_season.start_date, status: "active")
        
        for interest in Interest.all.reject { |a| a == Interest.where(:interest_name => "Random")[0] } 
          interest_members = interest.users
          if interest_members.count < 11
            #add the formular to the leagues
            enrollment = 5
            cheer_limit = 0
          else
            if interest_members.count > 10 and interest_members.count < 21 
                enrollment =  10
                cheer_limit = (interest_members/2).ceil
            else
              if interest_members.count > 20 and interest_members.count < 41 
                enrollment =  20
                cheer_limit = (interest_members/2).ceil
              else
                if interest_members.count > 20 and interest_members.count < 41 
                  enrollment =  (interest_members/2).ceil
                  cheer_limit = (interest_members/2).ceil
                end
              end
            end
          end 
                @new_season.leagues.build(interest_id: interest.id, enrollment_limit: enrollment, cheers_to_qualify: cheer_limit, status: "inactive")          
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
  
   private 
      def admin_restriction        
        if current_user.usertype == "normal"
           redirect_to stage_path
        end
      end  
end


       