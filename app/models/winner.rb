class Winner < ActiveRecord::Base
  belongs_to :user
  belongs_to :task
  
  def self.task_winner(user)     
    user_enrolled_task = user.tasks.order('id DESC')
    if user_enrolled_task.count == 0 or user_enrolled_task.blank?
      return nil # if user isn't enrolled in the task
    else
      winner_array = []
      for task in user_enrolled_task
       unless task.winner.blank?
          winner_array << task.winner.user
          winner_array << task
          return winner_array
       end 
      end 
      return nil   
    end
  end  
end
