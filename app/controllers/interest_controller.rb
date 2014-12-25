class InterestController < ApplicationController
  layout :resolve_layout
  def interest
    
    if request.post?
      unless params[:interest_ids].blank?
        for interest_id in params[:interest_ids]
            UserInterest.create(interest_id: interest_id, user_id:current_user.id)
        end
      end
      redirect_to stage_path
    end
   
  end
  
  
  def add_interest
    @user = current_user
    @league_interest = []
    unless @user.leagues.blank?
      for league in @user.leagues.where(:status=>"active")    
        @league_interest << league.interest 
      end
    end
    if request.post?
     unless @user.user_interests.blank?     
       for interest in @user.user_interests
         unless @league_interest.blank?
           unless @league_interest.include?(interest.interest)
            interest.destroy
           end
         end
       end
      end
      @interest = Interest.where(:interest_name=>"Random").last
      unless params[:interest_ids].blank?
           UserInterest.create(interest_id:@interest.id, user_id:current_user.id)
           for interest_id in params[:interest_ids]
              UserInterest.create(interest_id: interest_id, user_id:current_user.id)
           end
       end
       flash[:notice] = "Interest list has been updated"
       redirect_to stage_path
    end    
  end
    
  def resolve_layout
    case action_name
    when 'interest', 'add_interest'
      'layout2'
    else
      'no_layout'
    end
  end
  
end
