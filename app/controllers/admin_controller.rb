require 'competitive_module'
class AdminController < ApplicationController
  include ::CompetitiveModule
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
  
  def view_user
      @user_list = User.all.order("id DESC")
  end
  
  def league_winner
    for league in League.where(:status => "active")      
      position = 1
      for user_id in league_enrollment(league.id)
        unless User.find(user_id).cheers.where(:league=>league.id).blank?
          create_winners_and_assign_points(user_id,position,league)
          position = position + 1
        end
      end
      league.update_attributes(:status=>"inactive")
      league_season = league.season
    end 
    unless league_season.blank?
      SeasonWinnerNotification.create(:season_id=>league_season.id,:status=>"active")
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
          user_cheer = listed_user.cheers.where(:league_id=>league.id).inject(0){|sum,e| sum += e.cheer_number}
          position = get_user_league_position(league.id,listed_user.id)
          History.create(user_id: listed_user.id,competition_type:"season", season_id: last_season.id,league_id: league.id, position: position, cheer: user_cheer)
        end          
      end
    end
    if last_season.historypendings.last.update_attributes(:historypending=>"false")
      flash[:notice]="History has been created"
    else
      flash[:notice]="History wasn't created or an error occured"
    end        
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
    @task = Task.find(params[:id])
    finish_task(@task.id)         
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


       