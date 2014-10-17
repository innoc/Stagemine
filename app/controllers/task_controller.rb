class TaskController < ApplicationController
  layout :resolve_layout
  #THIS METHOD MUST BE RESCRICTED TO ADMINITRATORS ALONE
  def task
      @current_user = current_user
      @interest_list = current_user.interests
      if params[:id] == "welcome"
        @params = params[:id]
      else
        @task_list = Task.where("status=?","active")
        @user_task = []
          unless @task_list.blank?
              for task in @task_list
                  if task.label.interest.interest_name == params[:id]
                    @user_task << task
                  end
              end

          end
       end
       if request.post?
          task = Task.new()
          task.task_type = params[:task_type]
          task.title = params[:title] 
          task.admin_id = current_user.id
          task.description = params[:description]
          @line1 = params[:video_url]
          if ( /v=/.match(@line1)) 
            @id = /v=/=~(@line1)
            @updated_id = @id + 2 
            task.video_url = @line1[@updated_id..-1]
          end
          task.start_date = DateTime.new(params[:start_year].to_i,params[:start_month].to_i,params[:start_day].to_i)
          task.end_date = DateTime.new(params[:end_year].to_i,params[:end_month].to_i,params[:end_day].to_i)
          task.build_label(interest_id: params[:interest_id])
          #task.build_feed(feed_name: "Task",user_id: current_user.id)
          if task.save 
             flash[:notice]="A task has been created for #{Interest.find(params[:interest_id]).interest_name}"
          end
          respond_to do |format| 
           format.html{redirect_to admin_path}
           format.js
          end
      end
  end
  
  def task_checker
          #the purpose for this action is to update the tasks after the deadline has passed. 
          # 1) The task status is updated from active to inactive.
          # 2) All the Users are disenrolled from their enrolled task
          # 3) The winner of each task is calculated and stored in a winner table 
          # 4) A notification and news feed (directed to everyone on the site) is created 
          @user = current_user 
          @task_list = Task.where("status=?","active")
          for task in @task_list 
          @duration=(task.end_date.to_date - DateTime.now.to_date).to_i
            if @duration < 1
                  # 1) starts
                  task.update_attributes(:status=>"inactive") 
                  # 1) completed
                                
                  # 2) starts
                  unless task.enrolls.blank?
                     for enroll in task.enrolls
                      enroll.update_attributes(:status=>0)
                     end 
                  end
                  # 2)completed
                  @enrolled_users = task.users
                  @max_point = 0
                  @winner = 0
                  for task_point in task.task_points
                     if task_point.point > @max_point
                        @winner = task_point.user_id
                     end
                     @max_point = task_point.point
                  end
                  
                  unless @winner == 0 # This will help in a situation whereby there is no winner due to no vote
                          @winner_instance = Winner.create(:user_id=>@winner, :task_id=>task.id)
                          @badges = Badge.all                          
                          for badge in @badges
                              if @user.winners.count == badge.priority 
                                  BadgeAllocation.create(:user_id=>@winner, :badge_id=>badge.id, :task_name=>task.title)
                              end
                          end
                          if @user.winners.count > 5
                             BadgeAllocation.create(:user_id=>@winner,:badge_id=>Badge.where(:priority=> 5)[0].id,:task_name=>task.title)
                          end 
                          #need optimization
                          #_seasonFeed.find(task.feed.id).update_attributes(:created_at=>@winner_instance.created_at)
                          Notification.create(:notification_type=>"Winner",:notification_type_id=>@winner_instance.id,:user_id=>@winner)
                  end
                  
             end
          end
          
          respond_to do |format| 
           format.html{redirect_to stage_path}
           format.js
          end
  end
  
  def task_enroll
      @current_user = current_user # need this for ajax to work
      @user_task = []
      @user_task << Task.find(params[:id])
      @task = Task.find(params[:id])
      if current_user.enrolls.blank?
      Enroll.create(:user_id=> current_user.id , :task_id=>params[:id])
      else
      current_user.enrolls.last.update_attributes(:task_id=>params[:id],:status=>1)
      end
        respond_to do |format|
          format.html{redirect_to task_path(:id=>@task.label.interest.interest_name)}
          format.js
        end
  end
  
  def task_disenroll
      @current_user = current_user
      @user_task = []
      @user_task << Task.find(params[:id])
      @task = Task.find(params[:id])
      for enroll in current_user.enrolls
        if enroll.task_id == @task.id
           enroll.update_attributes(:status=>0)
        end
      end
      respond_to do |format|
          format.html{redirect_to task_path(:id=>@task.label.interest.interest_name)}
          format.js
      end
  end

  
  
  
  def task_info
    @user_task = []
    @task_list = Task.where("status=?","active")
    # find any active task that is related to the users interest
    unless @task_list.blank?
      for task in @task_list
          if current_user.interests.include?(task.label.interest)
           @user_task << task
          end
      end
    end
  end

private

def resolve_layout
    case action_name
    when 'task_info'
      false
    else
      'application'
    end
end
end
