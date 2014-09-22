class BadgeController < ApplicationController
  
  def badge
    @user = User.find(params[:id])
    @badge_list = @user.badge_allocations.order('created_at DESC')    
  end
  
end
