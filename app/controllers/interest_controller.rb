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
    
    if request.post?
       
       for interest in @user.user_interests 
         interest.destroy
       end
       
       unless params[:interest_ids].blank?
            UserInterest.create(interest_id:1, user_id:current_user.id)
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
