class SeasonController < ApplicationController
  layout :resolve_layout
  def enroll_league
        league = League.find(params[:id])
        if current_user.interests.include?(league.interest)
            LeagueEnrollment.create(league_id: params[:id], user_id: current_user.id)
            flash[:notice] = "You have now joined a new league"
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
  
  
  def season_checker
      for league in League.where(:status => "active")
        top_three = Season.league_top_three(league.id).to(3)
        point = 1
        for top_three_id in top_three
           Leaguewinner.create(:user_id=>top_three_id, :league_id=> league.id, :position=> point )
           point = point + 1
        end
                league.update_attributes(:status=>"inactive")

      end
     
      @season = Season.last 
      if @season.status == "active"
        @season.update_attributes(:status=>"inactive")
        Historypending.create(:season_id=> @season.id, :historypending=>"true")
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
  end
  
  def resolve_layout
    case action_name
    when 'view_league' 
      false
    else
      'application'
    end
  end
end
