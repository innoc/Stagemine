class UsersController < ApplicationController
  
   def create
    @user = User.new()
    if request.post?
      @user= User.new(user_params)
      @user.activated = "No"
      @user.usertype = "normal"
      @user.build_rank(user_id: @user.id, rankdetail_id:1)
      @user.user_interests.build(user_id: @user.id, interest_id:1)
      if @user.save
         session[:user_id] = @user.id
         redirect_to create_interest_path
      else
        flash[:notice] = "Ensure that you inserted the right data"
      end
    end
    
  end
  
  def update
    if current_user.update_attributes(user_params)
    flash[:notice] = "You info was successfully edited"
    redirect_to stage_path
    else
    flash[:notice] = "Ensure that all the fields are filled and your password matches"
    redirect_to alter_path  
    end
  end


  def user_params
     params.require(:user).permit(:first_name,:last_name,:user_name,:gender,:email,:password,:password_confirmation)
  end
  
  def resolve_layout
    case action_name
    when 'create'
      'layout2'
    else
      'aaplication'
    end
  end
  
  
  
end
