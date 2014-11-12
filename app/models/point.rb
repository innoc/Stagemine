class Point < ActiveRecord::Base
  belongs_to  :user
  belongs_to  :cheer
  belongs_to  :user_interest
  
    def self.league_point_allocation(post,post_author,point_value)
      unless post.label.blank? or post.label.interest.interest_name == "Random" #if the post isnt tagged with any interest
        user_interest_id = UserInterest.where(["user_id = ? and interest_id = ?",post_author.id, post.label.interest.id])
        if post.label.interest.leagues.last.season.status == "active" and post_author.leagues.include?(post.label.interest.leagues.last)
     
              if user_interest_id[0].point.blank? 
                    #if the league is active and the user in enrolled in it
                       Point.create(user_id:post_author.id,previous_point:point_value,point:point_value, user_interest_id: user_interest_id[0].id,status: 1)
                       point_flag = 0 #used for notification creation
                       point_update = point_value 
              else 
                        point_update =  user_interest_id[0].point 
                        user_interest_id = UserInterest.where(["user_id = ? and interest_id = ?",post_author.id, post.label.interest.id])
                        point_update.update_attributes(:previous_point=>point_update.point, :point=> point_update.point+point_value, :user_interest_id=>user_interest_id[0].id)
                        point_flag = 0 #used for notification creation.
                        point_update = point_update.point + point_value

              end
        
              if point_flag.blank?
                  last_notification = post_author.notifications.where("user_id=? AND notification_type=?", post_author.id,"Point")
                  unless last_notification.blank?
                        if ((Time.now() - last_notification[0].updated_at)/60) > 30.0
                            if last_notification[0].status == 0
                                new_counter = point_update - last_notification[0].cheer_storage
                                new_counter = new_counter + last_notification[0].notification_counter 
                                last_notification[0].update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>new_counter)
                            else
                                if last_notification[0].cheer_storage.blank?
                                  cheer_storage = 0.0
                                else 
                                  cheer_storage = last_notification[0].cheer_storage
                                end
                                last_notification[0].update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=> point_update - cheer_storage)
                            end
                        end
                  else
                        Notification.create(:cheer_storage=>point_update,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>point_update)
                  end
              end
        end
        return point_update 
     end   
   end
  
  
end
