class MessageController < ApplicationController
  layout :resolve_layout
  
  def create_message
    @user = User.find(params[:id])
    @identifier = params[:identifier]
    if request.post?
        unless params[:content].blank? or params[:content] == nil
            @message = Message.new(:user_id => params[:id], :sender_id => current_user.id, :content=> params[:content])
            if @message.save
             Notification.create(:notification_type=>"Message",:notification_type_id=>@message.id,:user_id=>@user.id,:secondary_user=>current_user.id)
             flash[:notice]="Message has been sent"
            else
              flash[:notice]="Something went wrong, please resend the message"
            end
            unless params[:identifier].blank? #This is for league winners
              Leaguewinner.find(params[:identifier]).update_attributes(:status=>"pending")
            end
        end        
        respond_to do |format|
            unless params[:identifier].blank?
              format.html{redirect_to pending_winners_path}
            else
              format.html{redirect_to portfolio_path(:id=>@user.id)}
            end
        end
    end    
  end
  
  def message
    @message = current_user.messages
  end
  
  private 
 
  def resolve_layout
      case action_name
      when 'create_message'
        false
      else  
        'application'
      end
  end

  
end
