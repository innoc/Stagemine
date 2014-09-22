class WelcomeController < ApplicationController
  layout :resolve_layout
  
  def welcome 
    
  end
  
  def login
    
  end
  
   def register
    @user = User.new()
    if request.post?
      @user= User.new(user_params)
      @user.activated = "No"
      @user.usertype = "normal"
      if @user.save
         flash[:notice] = "saved"
       #redirect_to stage_path
      else
        flash[:notice] = "Ensure that you inserted the right data"
      end
    end
    
  end


  def user_params
     params.require(:user).permit(:first_name,:last_name,:user_name,:gender,:email,:password,:password_confirmation)
  end
  
  def resolve_layout
    case action_name
    when 'login','register'
      'layout2'
    else
      'no_layout'
    end
  end
  
end
