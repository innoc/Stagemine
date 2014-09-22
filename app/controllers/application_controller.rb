class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #protect_from_forgery with: :null_session
  before_action :authorize, except: [:create,:welcome,:login]

  
  
  
  private
  
  def authorize
    unless session[:user_id]
       redirect_to root_path
    end
  end
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user
  

end
