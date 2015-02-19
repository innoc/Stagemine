class PortfolioController < ApplicationController
  layout :resolve_layout

  def portfolio
   @user = User.find(params[:id]) 
   @feed = []
   @link_type = 1
   @badge_count = @user.badge_allocations.count
   @user_cheers = @user.cheers.count
   @user_interest = @user.interests
   @fan = Friendship.where("friend_id=?",@user.id).order('created_at DESC').limit(10)
   @fanned = @user.friends.order('created_at DESC').limit(10)
   if @user.id == current_user.id
   @portfolio_restriction = "allow"
   end
   @fan_check = Friendship.where("user_id=? and friend_id=?",current_user.id,@user.id)
     
   if params[:interest].blank? 
       @interest = 0  
       @filter_code = "all"
       for interest in @user.interests
         for interest_feed in interest.feeds.where(:user_id => @user.id)
            @feed << interest_feed
         end
       end     
   else
      @interest = Interest.find(params[:interest])
      @filter_code = @interest.id
      @current_filter = @interest.interest_name
       for interest_feed in @interest.feeds.where(:user_id => @user.id)
          @feed << interest_feed
       end
   end
    @sorted_feed = @feed.sort! { |a,b| b[:created_at] <=> a[:created_at] }
    @feed = Kaminari.paginate_array(@sorted_feed).page(params[:page]).per(20)
  end

  def change_cover_image
    if request.post?
      user = User.find(params[:id])
      unless user.portfolio_cover.nil?
        user.portfolio_cover.destroy
      end
      portfolio_cover = PortfolioCover.create(:user_id=>params[:id], :cover_type=>"pic")            
      portfolio_image = PortfolioImage.new(image_params)
      portfolio_image.margin = 0
      portfolio_image.portfolio_cover_id = portfolio_cover.id
      if portfolio_image.save
       flash[:notice]="Your cover image was succesfully created"
      else
       flash[:notice]="You forgot to upload an image"
      end
      respond_to do |format|
        format.html{redirect_to portfolio_path(:id=>params[:id])}
        format.js
      end 
    end
  end

  def position_image
    @portfolio_image = PortfolioImage.find(params[:id])
    if request.post?
      portfolio_image = PortfolioImage.find(params[:id])
      if params[:dimension][0] == "-"
        portfolio_image.update_attributes(:margin=>params[:dimension])
      else
        portfolio_image.update_attributes(:margin=>0)
      end 
      user_id = portfolio_image.portfolio_cover.user_id
      if portfolio_image.save
        flash[:notice]="Your cover image position was changed"
      else
       flash[:notice]="Something went wrong"
      end
      respond_to do |format| 
        format.html{redirect_to portfolio_path(:id=>user_id)}
      end
    end
  end

  def cover_video
    if request.post?
      if params[:vid] == ""
          flash[:notice]= "Please enter your video URL"
      else
       @line1 = params[:vid]           
        if ( /v=/.match(@line1)) 
          portfolio_video = PortfolioVideo.new()
          @id = /v=/=~(@line1)
          @updated_id = @id + 2 
          portfolio_video.vid = @line1[@updated_id..-1]
          unless current_user.portfolio_cover.nil?
            current_user.portfolio_cover.destroy
          end
          portfolio_cover = PortfolioCover.create(:user_id=>current_user.id, :cover_type=>"vid")            
          portfolio_video.portfolio_cover_id = portfolio_cover.id
          if portfolio_video.save
           flash[:notice]="Your cover video was succesfully created"
          else
           flash[:notice]="Invalid URL"
          end
       else
          flash[:notice]="Invalid URL"
       end
      end
      respond_to do |format|
        format.html{redirect_to portfolio_path(:id=>current_user.id)}
        format.js
      end 
    end
  end

  def delete_portfolio_image
    port_cover = PortfolioCover.find(params[:id])
    port_cover_user = port_cover.user_id
    port_cover.destroy
    respond_to do |format| 
      format.html{redirect_to portfolio_path(:id=>port_cover_user)}
    end
  end

  def resolve_layout
    case action_name
    when 'cover_video','position_image'
      false
    else
      'application'
    end
  end

  def image_params
    params.require(:coverimage).permit(:image)
  end
  
end
