class SeasonController < ApplicationController
  layout :resolve_layout
  def enroll_league
    league = League.find(params[:id])
    if current_user.interests.include?(league.interest)
      LeagueEnrollment.create(league_id: params[:id], user_id: current_user.id)
      flash[:notice] = "You have now joined the #{league.interest.interest_name} league"
    else
      flash[:notice] = "An Error Occured"
    end
    respond_to do |format|
      format.html{redirect_to stage_path}
    end       
  end
  
  def view_league
    @interest_season = Interest.find(params[:id])
    @user = current_user
  end
  
  def league_detail 
    @league = League.find(params[:league_id])
  end 
  
  def season_checker 
    session[:return_to] ||= request.referer 
    @season = Season.last 
    if @season.status == "active"
      @season.update_attributes(:status=>"complete")
      Historypending.create(:season_id=> @season.id, :historypending=>"true")
    end
    session[:return_to] ||= request.referer
    respond_to do |format|
      format.html{redirect_to session.delete(:return_to)}
      format.js
    end
  end
  
  def audition_checker
      @audition = Audition.where(:status=>"active") 
      for audition in @audition
          if audition.video.cheers.count > (audition.league.cheers_to_qualify - 1)
             audition.update_attributes(:status=>"inactive", :qualified=>"Yes")
          end
      end     
  end
  
  def disenroll_league
       league = LeagueEnrollment.where(["user_id = ? and league_id= ?",current_user.id,params[:id]])
       league[0].destroy
       respond_to do |format|
        format.html{redirect_to stage_path}
       end
  end
  
  def see_all
    @user = current_user
    @interest_id  = Interest.find(params[:id]) 
    @season_winner_notification_finder = @interest_id.try(:leagues).try(:last).try(:season).try(:season_winner_notification)
    unless @season_winner_notification_finder.blank?
      @season_winner_notification_active = @season_winner_notification_finder if @season_winner_notification_finder.status == "active"
      @season_winner_notification = @season_winner_notification_active if !(@season_winner_notification_active.blank?) and current_user.winner_notification_checks.where(:winner_notification_id=>@season_winner_notification_active.id, :interest_name=>@interest_id.interest_name).blank?
    end
  end
  
  def resolve_layout
    case action_name
    when 'view_league', 'league_detail'
      false
    else
      'application'
    end
  end
end
