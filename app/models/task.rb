class Task < ActiveRecord::Base
  has_one :label, :dependent=>:destroy,autosave:true
  has_many :users ,  :through=> :enrolls
  has_many :enrolls, :dependent=>:destroy
  has_one :feed, :dependent=>:destroy
  has_one :winner, :dependent=>:destroy
  has_many :videos, :dependent=>:destroy
  has_many :task_points, :dependent=>:destroy
  
  def self.task_table_position(task_id, user_id)
         @user_contained = 0
         @task = Task.find(task_id)
         if @task.status == "active"
              @enrolled_users = @task.users
              @task_array=[]
              for user in @enrolled_users
                if user.enrolled?
                  @task_array << user.id
                  if user.id == user_id
                   @user_contained = 1
                  end
                end
              end
              #get the sorted list users
              unless @task_array.blank?
                      if @task_array.length == 1
                          return -2 #no contest                      
                      else
                        @i = @task_array.length - 1
                        while @i > 0 do
                            @first = 0 
                            @j = 1
                             while @j <= @i do 
                                first_user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",@task_array[@j], @task.id]).first
                                second_user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",@task_array[@first], @task.id]).first

                                if first_user_task_point.try(:point).blank? 
                                  @first = @j
                                else
                                 unless second_user_task_point.try(:point).blank?
                                    if first_user_task_point.point  <  second_user_task_point.point
                                        @first = @j
                                    end
                                 end
                                end
                                  @j = @j + 1
                                end
                                @temp = @task_array[@first]
                                @task_array[@first] = @task_array[@i]
                                @task_array[@i] = @temp
                                @i = @i - 1
                            end 
                        if @user_contained == 1
                           @task_array << @task_array.index(user_id) + 1
                        else
                            @task_array << "blank"
                        end 
                        @user_contained = 0     
                        return @task_array.last
                   end #end of if statement
               else
                   return -1 #nobody is enrolled in the task
               end #end of unless statement
         else
           if @task.status == "complete" 
              return 0 #task is not active
           end
         end #end of if statement
     end

 def self.task_table(task_id, user_id)
   @user_contained = 0
   @task = Task.find(task_id)
   if @task.status == "active"
        @enrolled_users = @task.users
        @task_array=[]
        for user in @enrolled_users
          if user.enrolled?        
            @task_array << user.id
            if user.id == user_id
             @user_contained = 1
            end
          end
        end
        #get the sorted list users
        unless @task_array.blank?
                if @task_array.length == 1
                    return -2 #no contest                      
                else
                  @i = @task_array.length - 1
                  while @i > 0 do
                      @first = 0 
                      @j = 1
                       while @j <= @i do 
                          first_user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",@task_array[@j], @task.id]).first
                          second_user_task_point = TaskPoint.where(["user_id = ? and task_id = ?",@task_array[@first], @task.id]).first

                          if first_user_task_point.try(:point).blank? 
                            @first = @j
                          else
                           unless second_user_task_point.try(:point).blank?
                              if first_user_task_point.point  <  second_user_task_point.point
                                  @first = @j
                              end
                           end
                          end
                            @j = @j + 1
                          end
                          @temp = @task_array[@first]
                          @task_array[@first] = @task_array[@i]
                          @task_array[@i] = @temp
                          @i = @i - 1
                      end 
                  if @user_contained == 1
                     @task_array << "_#{@task_array.index(user_id) + 1}" 
                  else
                      @task_array << "blank"
                  end 
                  @user_contained = 0     
                  return @task_array
             end #end of if statement
         else
             return -1 #nobody is enrolled in the task
         end #end of unless statement
   else
     if @task.status == "complete" 
        return 0 #task is not active
     end
   end #end of if statement
end
  
end
