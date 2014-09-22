class FriendshipController < ApplicationController
  
    def create_friendship
        session[:return_to] ||= request.referer
        @user = User.find(current_user)
        @friend = User.find(params[:id])
        @friendship1 = Friendship.create(:user_id => @user.id, :friend_id => @friend.id) # 0 = friend_id is the performer
        #@friendship2 = Friendship.create(:user_id => @friend.id, :friend_id => @user.id, :status => 1) # 1 = friend_id is the fan
        if @friendship1.save #&& @friendship2.save
        flash[:notice]= "You are now a fan of #{@friend.user_name}"
        else
        flash[:notice]= "An error occured"
        end
        respond_to do |format|
          format.html{redirect_to session.delete(:return_to)}
          format.js
        end
    end
    
    def suggested_friends
       @similar_users = []
       @current_user_interest = current_user.interests
       for current_user_interest in @current_user_interest
         @similar_users << current_user_interest.users
       end
    end
    
    def disconnect
        session[:return_to] ||= request.referer
        @friendship = Friendship.find(params[:fan_id])        
        unless @friendship.blank?
          @friendship.destroy
        end
        respond_to do |format|
          format.html{redirect_to session.delete(:return_to)}
          format.js
        end 
    end
    
    def see_all_friendship
        @type = params[:type]
        @user = User.find(params[:id])
        if @type == "fan"
          @friends = Friendship.where("friend_id=?",@user.id)
        else
          @friends = @user.friends
        end          
    end
 
end
