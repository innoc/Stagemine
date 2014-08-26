class PortfolioController < ApplicationController
  
  def portfolio
   @user = User.find(params[:id]) 
   @feed = []
   @user_cheers = @user.cheers.count
   @user_interest = @user.interests
   @fan = Friendship.where("friend_id=?",@user.id)
   @fanned = @user.friends
   @fan_check = Friendship.where("user_id=? and friend_id=?",current_user.id,@user.id)
     
   if params[:interest].blank? 
       @interest = 0   
       for interest in @user.interests
               for interest_feed in interest.feeds.where(:user_id => @user.id)
                    @feed << interest_feed
               end
       end     
   else
      @interest = Interest.find(params[:interest])
               for interest_feed in @interest.feeds.where(:user_id => @user.id)
                  @feed << interest_feed
               end
   end
    @sorted_feed = @feed.sort! { |a,b| b[:created_at] <=> a[:created_at] }
    @feed = Kaminari.paginate_array(@sorted_feed).page(params[:page]).per(20)
  end
  
end
