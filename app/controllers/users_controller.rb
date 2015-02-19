class UsersController < ApplicationController
  
 def create
  @user = User.new()
  if request.post?
    @user= User.new(user_params)
    if user_params[:first_name].present? and user_params[:last_name].present? and user_params[:user_name].present? 
      user_params[:first_name][0] = user_params[:first_name][0].try(:capitalize)
      user_params[:last_name][0] = user_params[:last_name][0].try(:capitalize)
      user_params[:user_name][0] = user_params[:user_name][0].try(:downcase)
    end
    @user.first_name = user_params[:first_name]
    @user.last_name = user_params[:last_name]
    @user.user_name = user_params[:user_name] 
    @user.activated = "No"
    @user.usertype = "normal"
    @user.build_rank(user_id: @user.id, rankdetail_id:1)
    @user.user_interests.build(user_id: @user.id, interest_id:1)
    if @user.save
       flash.discard(:notice) 
       session[:user_id] = @user.id
       redirect_to create_interest_path
    else
      flash[:notice] = "You entered an incorrect value or your user name/email already exist"
    end
  end    
 end
 
 def winner_notification_check
  if request.xhr?    
    WinnerNotificationCheck.create(:user_id=>current_user.id,:season_winner_notification_id=>params[:id],:interest_name=>params[:interest_name])
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
       if params[:flag] == "m"
        @data << {:first => "#{user.first_name}", :value => "#{user.user_name}", :last => "#{user.last_name}",:img => "#{(@image)}",:id => "#{user.id}",:username => "#{user.user_name}"}
       else
        @data << {:first => "#{user.first_name}", :value => "#{user.first_name} #{user.last_name}", :last => "#{user.last_name}",:img => "#{(@image)}",:id => "#{user.id}",:username => "#{user.user_name}"}
       end
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
    if user_params[:first_name].present? and user_params[:last_name].present? and user_params[:user_name].present? 
      user_params[:first_name][0] = user_params[:first_name][0].try(:capitalize)
      user_params[:last_name][0] = user_params[:last_name][0].try(:capitalize)
      user_params[:user_name][0] = user_params[:user_name][0].try(:downcase)
    end
    current_user.first_name = user_params[:first_name]
    current_user.last_name = user_params[:last_name]
    current_user.user_name = user_params[:user_name]      
    current_user.gender = user_params[:gender]
    current_user.email = user_params[:email]
    current_user.usertype = current_user.usertype
    current_user.hashed_password = "placeholder"
    if current_user.save
      flash[:notice] = "Your info was successfully edited"
    else
      flash[:notice] = "Ensure that all the fields are filled correctly"
    end
    redirect_to alter_path  
  end

  def update_password    
    if current_user.update_attributes(user_params)
      flash[:notice] = "Your info was successfully edited"
    else
      flash[:notice] = "Ensure that your password matches"
    end
    redirect_to alter_path  
  end

  def user_params
    params.require(:user).permit(:first_name,:last_name,:user_name,:gender,:email,:password,:password_confirmation)
  end
  
  def user_history
    @user = User.find(params[:id])
    @user_history = @user.pointhistories
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
