class TaskPoint < ActiveRecord::Base
    belongs_to :task
    belongs_to :user

  
    def self.task_point_allocator(post_author,post,point_value)
       unless post.label.blank? #if the post is tagged with aninterest
              if  post.task.status == "active" #if the user is enrolled in a task and task is still active
                     user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",post_author.id, post.task.id])
                     if  user_task_point.blank? # if the user doesnt have task points, create a new task point  
                        TaskPoint.create(user_id:post_author.id,task_id:post.task.id,previous_point:point_value,point:point_value,status: 1)
                        point_update = point_value #we need this for the notification
                     else 
                        user_task_point[0].update_attributes(:previous_point=> user_task_point[0].point, :point=> user_task_point[0].point + point_value)
                        point_update = user_task_point[0].point + point_value
                     end 
                
                     last_notification = post_author.notifications.where("user_id=? AND notification_type=?", post_author.id,"Point")
                     unless last_notification.blank?
                            if ((Time.now() - last_notification[0].updated_at)/60) > 30.0
                                if last_notification[0].status == 0
                                    new_counter = point_update - last_notification[0].cheer_storage
                                    new_counter = new_counter + last_notification[0].notification_counter 
                                    last_notification[0].update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>new_counter)
                                else
                                    last_notification[0].update_attributes(:cheer_storage=>point_update,:updated_at=>Time.now,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=> point_update - last_notification[0].cheer_storage)
                                end
                            end
                      else
                            Notification.create(:cheer_storage=>point_update,:notification_type=>"Point",:status=>0,:notification_type_id=>post.id,:user_id=>post_author.id,:notification_counter=>point_update)
                      end
                      return point_update 
              end 
        end
    end
  
end
