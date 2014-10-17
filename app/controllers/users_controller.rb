class UsersController < ApplicationController
  
 def create
  @user = User.new()
  if request.post?
    @user= User.new(user_params)
    user_params[:first_name][0] = user_params[:first_name][0].capitalize
    user_params[:last_name][0] = user_params[:last_name][0].capitalize
    user_params[:user_name][0] = user_params[:user_name][0].downcase
    @user.first_name = user_params[:first_name]
    @user.last_name = user_params[:last_name]
    @user.user_name = user_params[:user_name]    
    @user.activated = "No"
    @user.usertype = "normal"
    @user.build_rank(user_id: @user.id, rankdetail_id:1)
    @user.user_interests.build(user_id: @user.id, interest_id:1)
    if @user.save
       session[:user_id] = @user.id
       redirect_to create_interest_path
    else
      flash[:notice] = "You entered an incorrect value or your user name/email already exist"
    end
  end    
 end
 
  
  def search_suggestions
     @suggestion = User.searchsuggestion(params[:term])
     @data = []
     for  user in @suggestion
      unless user.usertype == "admin"
       if user.userimage.blank?
          @image = view_context.asset_path("Default_tiny.png")
       else
          @image = user.userimage.image.url(:tiny)
       end
       @data << {:first => "#{user.first_name}", :value => "#{user.first_name} #{user.last_name}", :last => "#{user.last_name}",:img => "#{(@image)}",:id => "#{user.id}",:username => "#{user.user_name}"}
      end
     end
     @data.to_json
     render json: @data
  end
  
  def view_search
     unless params[:search].blank?
      @suggestion = User.searchsuggestion(params[:search])
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
