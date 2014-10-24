class StageController < ApplicationController
layout :resolve_layout

def stage
    @vid_id= current_user.videos.last
    @feed = []
    @user_task = []
    user_check = [] # you need this to prevent duplicate feed
    @user = current_user   
    @user_cheers = current_user.cheers.count
    @task_list = Task.where("status=?","active")
    @filter_code = params[:id]
    @user_interest_old = current_user.interests
    @user_interest = @user_interest_old.reject { |a| a == Interest.where(:interest_name => "Random")[0] } 
    @random_interest = @user_interest.sample(1)
    @fan = Friendship.where("friend_id=?",@user.id)
    @user_performer = current_user.friends
      
    #get suggested friends
    # the approach is to first get an array of the user's friends
    # Loop through the user's interest, selecting the enrolled user for each interest 
    # Store each user that is enrolled in each interest but not already a firend 
    
    user_friends = current_user.friends #Get user friends
    @friend_suggestion = []
   
    for user_interest in @user_interest #Loop through the user interest
      unless user_interest == "Random"
        for interested_user in user_interest.users #Loop through the users that have similar interest
          unless interested_user.usertype 
              unless interested_user.id == current_user.id 
                unless user_friends.include? interested_user 
                    unless user_check.include? interested_user
                         user_check << interested_user
                         @friend_suggestion << interested_user 
                    end
                end
              end
          end            
        end
      end 
    end
    if @friend_suggestion.count > 3 
      @friend_suggestion  = @friend_suggestion.sample(3)
    end
    #end of friend suggestion
    
    # find any active task that is related to the users interest
    unless @task_list.blank?
      for task in @task_list
          if @user_interest.include?(task.label.interest)
           @user_task << task
          end
      end
    end

    # By default all the feed from the user's interest will be displayed
    # I can achieve this by first getting the interests of the current 
    # user and then getting all other users following that interest
    # finally, get the feeds of each user 
          
    if params[:id] == "all" or params[:id].blank? # 01 means everyone's feed
      for interest in current_user.interests
         for interest_feed in interest.feeds
              @feed << interest_feed
         end
      end
      @filter_code = "all"
    else
      if params[:id] == "fan" #02 means fan's feed             
          #@user_feed_remote = Feed.find(:all,:conditions=>["primary_user_id=?",current_user.id])
          unless @fan.blank?
             for fan in @fan
               for fan_feed in fan.user.feeds
                 @feed << fan_feed
               end
             end
          end
      else
      if params[:id] == "fanned" #03 means following feed
          @user_performer = current_user.friends.where("status=?",0)
          unless @user_performer.blank?
             for performer in @user_performer
               for performer_feed in performer.feeds
                 @feed << performer_feed
               end
             end
         end
      else
        if params[:id] == "task"
           unless Task.all.where(:status=>"active").blank?
               for interest in current_user.interests
                   for interest_feed in interest.feeds.where(:feed_name=="Video")
                      unless interest_feed.video.try(:task).blank?
                             unless interest_feed.video.task.status == "inactive"
                                    @feed << interest_feed
                             end
                      end 
                   end
               end
           end
        else
            #filter feed based on interest 
            filtered_interest = Interest.find(params[:id])
            @user_list = filtered_interest.users
             for user_list in @user_list
                for user_feed in user_list.feeds
                    unless user_feed.word_id.blank?
                       unless user_feed.word.label.blank?
                           if user_feed.word.label.interest.id == Interest.find(params[:id]).id
                              @feed << user_feed
                           end
                       end
                    else
                    unless user_feed.picture_id.blank?                     
                        @feed << user_feed    
                    else
                    unless user_feed.video_id.blank?
                      unless user_feed.video.label.blank?
                            if user_feed.video.label.interest.id == Interest.find(params[:id]).id
                               @feed << user_feed
                            end
                      end
                    end
                    end
                    end
                end
             end
             @current_filter = filtered_interest.interest_name
             #end of interest filter
            end
        end #end of follow
      end
         #end of fan
   end
     #end of all
    @sorted_feed = @feed.sort! { |a,b| b[:created_at] <=> a[:created_at] }
    @feed = Kaminari.paginate_array(@sorted_feed).page(params[:page]).per(1)
    #end of default feed
end
  
def vid_display
    @user = current_user
    @vid_id = Video.find(params[:id])
end

def delete_feed
   session[:return_to] ||= request.referer
   feed = Feed.find(params[:id])
     if params[:type] == "v"
      post = feed.video
     else
       if params[:type] == "i"
        post = feed.picture       
       else
        if params[:type] == "w"
           post = feed.word   
        end 
       end
     end
   if feed.destroy and post.destroy              
       respond_to do |format| 
             flash[:notice]="Your post was deleted"
             format.html{redirect_to session.delete(:return_to)}
       end     
   else     
        respond_to do |format| 
             flash[:notice]="An error occurred" 
             format.html{redirect_to session.delete(:return_to)}
       end     
   end
end
 
def image_display
  @user = current_user
  @image = Picture.find(params[:id])
end

def create_image 
  @picture = Picture.new()
  if request.post?
       
           @new_post = Picture.new(image_params)
           @new_post.user_id = current_user.id
           @label_interest= Interest.where(:interest_name => "Random")
           @new_post.build_label(interest_id: @label_interest[0].id, video_id: @new_post.id)
           @new_post.build_feed(feed_name: "Image",user_id: current_user.id, interest_id: @label_interest[0].id)
           if @new_post.save
               flash[:notice]="Your Post was successfully created"
           else
               flash[:notice]="You forgot to upload an image"
           end 

       respond_to do |format|
            format.html{redirect_to stage_path}
            format.js
       end 
  end
end


def create_word
  @user_interest = current_user.interests
  if request.post?
       if params[:content] == ""
          flash[:notice]="Please enter a word"
       else
           @new_post = Word.new()
           @new_post.user_id = current_user.id
           @new_post.content = params[:content]
           @label_interest= Interest.find(params[:label_interest_id])
           @new_post.build_label(interest_id: @label_interest.id, word_id: @new_post.id)
           @new_post.build_feed(feed_name: "Word",user_id: current_user.id, interest_id: @label_interest.id)
           @new_post.save
           flash[:notice]="Your Post was successfully created"
       end 
       respond_to do |format|
            format.html{redirect_to stage_path}
            format.js
       end  
  end
end

def hidden_task
  @user = current_user
end
  
def create_vid
    session[:return_to] ||= request.referer
    @user_interest = current_user.interests
    unless params[:task_id].blank?
    @task_id = params[:task_id]
    end
    unless params[:league].blank?
    @league = League.find(params[:league])
    end
    if request.post?
       if params[:vid] == ""
          flash[:notice]= "Please enter your video URL"
       else
           @new_post = Video.new()
           @line1 = params[:vid]
               
               if ( /v=/.match(@line1)) 
                    @id = /v=/=~(@line1)
                    @updated_id = @id + 2 
                    @new_post.vid = @line1[@updated_id..-1]
                    unless @league.blank?                            
                      @new_post.build_audition(:user_id=>current_user.id,:season_id=>@league.season.id,:league_id=>@league.id)                      
                    end
                    @new_post.user_id = current_user.id
                    @new_post.description = params[:description]
                    unless params[:task_id].blank? 
                      @new_post.task_id = params[:task_id]
                      @new_post.build_feed(feed_name: "Video",user_id: current_user.id, interest_id:Task.find(@task_id).label.interest.id)
                    else 
                    unless @league.blank?
                      @new_post.build_feed(feed_name: "Video",user_id: current_user.id, interest_id:@league.interest.id)   
                    else
                      @new_post.build_feed(feed_name: "Video",user_id: current_user.id, interest_id: params[:label_interest_id])
                    end
                    end
                     if @task_id.blank? and @league.blank?      
                              @label_interest= Interest.find(params[:label_interest_id])
                              @new_post.build_label(interest_id: @label_interest.id, video_id: @new_post.id)
                     else
                       unless @league.blank?
                           @new_post.build_label(interest_id: @league.interest.id, video_id: @new_post.id)
                       else
                           @new_post.build_label(interest_id: Task.find(@task_id).label.interest.id, video_id: @new_post.id)
                       end
                     end                  
                     if @new_post.save
                                    
                       if params[:task_id].blank?
                        if @league.blank?
                           flash[:notice]="Your video was successfully submitted"
                        else
                           flash[:notice]="Your audition video was successfully submitted. Good Luck!!!"
                        end
                       else
                        flash[:notice]="Your task video was successfully submitted. Good Luck!!!"
                       end
                     end
               else 
                     flash[:notice]="Invalid video URL"
               end
        end 
        respond_to do |format|
          format.html{redirect_to session.delete(:return_to)}
          format.js
        end
    end
end

private

def image_params
params.require(:picture).permit(:image,:description)
end

def resolve_layout
    case action_name
    when 'vid_display', 'create_vid', 'create_image', 'image_display','create_word','hidden_task'
      false
    else
      'application'
    end
end

end
