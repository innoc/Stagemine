class SessionsController < ApplicationController
    layout :resolve_layout
    def create
      #user = User.from_omniauth(env["omniauth.auth"])
      if user = User.authenticate(params[:user_name], params[:password])
          if user.usertype =="admin"
            session[:user_id] = user.id            
            redirect_to admin_path
          else
            session[:user_id] = user.id
            redirect_to stage_path
          end
      else
        flash[:notice] = "Invalid login/password combination"
        redirect_to root_path
      end
    end
  
   def destroy
    reset_session
    redirect_to root_path
   end
  
  
  
end
