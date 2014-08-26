class AdminController < ApplicationController

  def admin 
      @point_pending = Historypending.where(:historypending=> "true")
  end
  
  
  def create_history
    last_season = Season.last
    leagues = last_season.leagues
      for league in leagues
       unless league.interests.last.interest_name == "Random"
            user = league.users
           
              for listed_user in user 
                user_point = listed_user.points.sum(:point) + listed_user.task_points.sum(:point)
                position = Season.league_table_admin(league.id,listed_user.id).last[1..-1].to_i
                pointhistory = Pointhistory.new(user_id: listed_user.id,season_id:last_season.id,position: position, point: user_point,interest_id: league.interest.id)
                if pointhistory.save and last_season.historypendings.last.update_attributes(:historypending=>"false")
                      flash[:notice]="History has been created"
                else
                      flash[:notice]="History wasnt created or an error occured"
                end
              end
        end
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
        @new_season.status = "active"
        for interest in Interest.all.reject { |a| a == Interest.where(:interest_name => "Random")[0] } 
          @new_season.leagues.build(interest_id: interest.id, status: "active")
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
  
end


       