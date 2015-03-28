class NotificationController < ApplicationController
  
  def notification
    @notifications = current_user.notifications.where("status=?",1).order(" updated_at DESC")
    @notifications_unread = current_user.notifications.where("status=?",0).order(" updated_at DESC")
  end
  
end
