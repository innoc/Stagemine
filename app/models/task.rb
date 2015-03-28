class Task < ActiveRecord::Base
  has_one :label, :dependent=>:destroy,autosave:true
  has_many :users ,  :through=> :enrolls
  has_many :enrolls, :dependent=>:destroy
  has_one :feed, :dependent=>:destroy
  has_one :winner, :dependent=>:destroy
  has_many :videos, :dependent=>:destroy
  has_many :Vote, :dependent=>:destroy
  
  def self.task_table_position(task_id, user_id)
    user_contained = false
    task = Task.find(task_id)
    if task.status == "active"
      enrolled_users = task.users.pluck(:id)
      if User.find(user_id).tasks.pluck(:id).include?(task_id)
        user_contained = true
      end
      unless enrolled_users.blank?
        if enrolled_users.length == 1
          return -2 #no contest                      
        else
          i = enrolled_users.length - 1
          while i > 0 do
            first = 0 
            j = 1
            while j <= i do 
              first_user_cheers = Vote.where(["user_id = ? and task_id = ?",enrolled_users[j], task.id]).inject(0){|sum,e| sum += e.vote_number}
              second_user_cheers = Vote.where(["user_id = ? and task_id = ?",enrolled_users[first], task.id]).inject(0){|sum,e| sum += e.vote_number}
              if first_user_cheers.blank? 
                first = j
              else
                unless second_user_cheers.blank?
                  if first_user_cheers <  second_user_cheers
                    first = j
                  else
                    if first_user_cheers == second_user_cheers
                      enrollment_time_j = Enroll.where(["user_id = :user_id and task_id = :task_id", { user_id: User.find(enrolled_users[j]) , task_id: task.id}]).last.created_at
                      enrollment_time_first = Enroll.where(["user_id = :user_id and task_id = :task_id", { user_id: User.find(enrolled_users[first]) , task_id: task.id}]).last.created_at
                      if enrollment_time_j > enrollment_time_first
                        first = j
                      end 
                    end
                  end
                end
              end
              j = j + 1
            end
            temp = enrolled_users[first]
            enrolled_users[first] = enrolled_users[i]
            enrolled_users[i] = temp
            i = i - 1
          end 
          if user_contained
            user_task_position =  enrolled_users.index(user_id) + 1
          else
            user_task_position = "blank"
          end 
          return user_task_position
        end
      else
        return -1 #nobody is enrolled in the task
      end
    else
      if task.status == "complete" 
        return 0 
      end
    end
  end

  def self.task_table(task_id, user_id)
    user_contained = false
    task = Task.find(task_id)
    if task.status == "active"
      enrolled_users = task.users.pluck(:id)
      if User.find(user_id).tasks.pluck(:id).include?(task_id)
        user_contained = true
      end
      #get the sorted list users
      unless enrolled_users.blank?
        if enrolled_users.length == 1
          return -2 #no contest                      
        else
          i = enrolled_users.length - 1
          while i > 0 do
            first = 0 
            j = 1
            while j <= i do 
              first_user_cheers = Vote.where(["user_id = ? and task_id = ?",enrolled_users[j], task.id]).inject(0){|sum,e| sum += e.vote_number}
              second_user_cheers = Vote.where(["user_id = ? and task_id = ?",enrolled_users[first], task.id]).inject(0){|sum,e| sum += e.vote_number}
              if first_user_cheers.blank? 
                first = j
              else
                unless second_user_cheers.blank?
                  if first_user_cheers <  second_user_cheers
                    first = j
                  else
                    if first_user_cheers == second_user_cheers
                      enrollment_time_j = Enroll.where(["user_id = :user_id and task_id = :task_id", { user_id: User.find(enrolled_users[j]) , task_id: task.id}]).last.created_at
                      enrollment_time_first = Enroll.where(["user_id = :user_id and task_id = :task_id", { user_id: User.find(enrolled_users[first]) , task_id: task.id}]).last.created_at
                      if enrollment_time_j > enrollment_time_first
                        first = j
                      end 
                    end
                  end
                end
              end
              j = j + 1
            end
            temp = enrolled_users[first]
            enrolled_users[first] = enrolled_users[i]
            enrolled_users[i] = temp
            i = i - 1
          end 
          if user_contained
            enrolled_users << "_#{enrolled_users.index(user_id) + 1}" 
          else
            enrolled_users << "blank"
          end 
          user_contained = false     
          return enrolled_users
        end #end of if statement
      else
        return -1 #nobody is enrolled in the task
      end #end of unless statement
    else
      if task.status == "complete" 
        return 0 #task is not active
      end
    end #end of if statement
  end  
end