class PointAllocationController < ApplicationController
  
def create_cheer
   #THE FIRST SECTION IS FOR FINDING THE POST TYPE 
   @post_type = Feed.find(params[:post_type]).feed_name
   @task_is_active = 0 #need this to prevent duplicate point allocation for task and league
   if (@post_type == "Word")
      @post = Word.find(params[:id])
   else 
       if (@post_type == "Video") 
           @post = Video.find(params[:id])
       else
           if (@post_type == "Image") 
               @post = Picture.find(params[:id])
           end 
       end  
   end
   # END OF FRIST SECTION
   @post_author = @post.user 
   session[:return_to] ||= request.referer
   
   if request.post?
       #THE SECONG SECTION HANDLES THE CHEER AND NOTIFICATION CREATION
       @cheer = Cheer.new()
       @pointdata = Pointdata.find(1)
       @cheer.user_id = @post_author.id
       @cheer.cheerer_id = current_user.id
        if @post_type == 'Word'
          @cheer.word_id = @post.id
          @point_value = (@pointdata.point_number/@pointdata.word_divider)
        else
            if @post_type == 'Image'
              @cheer.picture_id = @post.id
              @point_value = (@pointdata.point_number/@pointdata.picture_divider)
            else              
                if @post_type == 'Video'
                  @cheer.video_id = @post.id
                  @point_value = @pointdata.point_number
                      unless @post.task_id.blank?
                        @point_value = @pointdata.point_number + @pointdata.vote_adder
                        @point_update = TaskPoint.task_point_allocator(@post_author,@post,@point_value) 
                      end 
                end
            end
        end 
        @cheer.save
        unless Season.all.blank?
          @point_update = Point.league_point_allocation(@post,@post_author,@point_value)
        end

        
        # THIRD SECTION IS FOR UPDATING RANKS AND CREATING NEW RANKS
        unless @point_update.blank?
            if @post_author.rank.blank? 
              #creating a new rank if user doesnt already have rank
              @rank = Rank.new()
              @rank.user_id = @post_author.id
              @rank.rankdetail_id = 1
              @rank.save
            else 
               @rank = @post_author.rank
              
                   unless @post_author.points.blank?
                       @task_points =  @post_author.task_points.where(status: 1)
                       @league_points =  @post_author.points.where(status: 1)
                        @point = 0 
                         unless @task_points.blank?
                           for task_point in @task_points
                             @point = @point + task_point.point
                           end
                         end
                         unless @league_points.blank?
                           for league_point in @league_points
                             @point = @point + league_point.point
                           end
                         end
                       
                        for rank_list in Rankdetail.all
                           
                           if  @point > rank_list.rank_min_point
                              @new_rank = rank_list.id
                           end
                        end
                       
                        unless  @new_rank == @post_author.rank.rankdetail.id
                             if @rank.update_attributes(:rankdetail_id=>@new_rank)
                                if Rankdetail.find(@new_rank).rank_max_point > @post_author.rank.rankdetail.rank_max_point
                                  Feed.create(feed_name: "Rank",user_id: @post_author.id,rank_id:@rank.id)
                                  Notification.create(:cheer_storage=>@point_value,:notification_type=>"Rank",:notification_type_id=>@new_rank,:user_id=>@post_author.id,:notification_counter=>@point_value)
                                end
                            end
                           #this will only change if the user was promoted to a new rank
                        end
                   end
             end 
          end
          #END OF THIRD SECTION
       respond_to do |format|
            format.html{redirect_to stage_path}
            format.js
       end 
   end #end of post

end #end of method 
  
  
def display_cheer
     @cheers = current_user.cheers.order(created_at: :desc)
end
  
  
end
