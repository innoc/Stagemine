class MessageController < ApplicationController
  layout :resolve_layout
  
  def create_message
    #the search variable is gotten from autosuggestion message creation box
    @user = User.find(params[:id])
    @identifier = params[:identifier]
    @message_flag = params[:flag_message]
    if request.post?
      unless params[:search].nil?
        #the following lines of code are for autosuggestion messaging 
        unless params[:search].blank?
          autosuggestion_user = User.find_by_user_name(params[:search])
          unless autosuggestion_user.blank? or params[:content].blank? or params[:content] == nil
            conversation = Conversation.create(:user_id=>current_user.id, :recipient_id=>autosuggestion_user.id)
            conversation.messages.create(:user_id =>autosuggestion_user.id, :sender_id => current_user.id, :content=> params[:content])
            if conversation.save
             Notification.create(:notification_type=>"Message",:notification_type_id=>conversation.messages.last.id,:user_id=>autosuggestion_user.id,:secondary_user=>current_user.id)
             flash[:notice]="Message has been sent"
            else
              flash[:notice]="Something went wrong, please resend the message"
            end
            unless params[:identifier].blank? #This is for league winners
              Leaguewinner.find(params[:identifier]).update_attributes(:status=>"pending")
            end
          else
            flash[:notice]="Please enter your message content"
          end        
        else
          flash[:notice]="Please enter a recipient"
        end
      else
        #the following lines of code are for portfolio messaging
        unless params[:content].blank? or params[:content] == nil
          @message = Message.new(:user_id =>@user.id, :sender_id => current_user.id, :content=> params[:content])
          if @message.save
           Notification.create(:notification_type=>"Message",:notification_type_id=>@message.id,:user_id=>@user.id,:secondary_user=>current_user.id)
           flash[:notice]="Message has been sent"
          else
            flash[:notice]="Something went wrong, please resend the message"
          end
          unless params[:identifier].blank? #This is for league winners
            Leaguewinner.find(params[:identifier]).update_attributes(:status=>"pending")
          end
        else
          flash[:notice]="Something went wrong, please resend the message"
        end        
      end         
      respond_to do |format|
        unless params[:identifier].blank?
          format.html{redirect_to pending_winners_path}
        else
          unless params[:search].nil?
            format.html{redirect_to message_path}
          else
            format.html{redirect_to portfolio_path(:id=>@user.id)}
          end
        end
      end
    end    
  end

  def view_conversation
    @conversation = Conversation.find(params[:id])
    @messages = @conversation.try(:messages)
    if @conversation.user.id == current_user.id
      @recipient = @conversation.recipient_id
    else 
      @recipient = @conversation.user_id
    end 
  end

  def reply_message
    if request.post?
      conversation = Conversation.find(params[:conversation_id])
      unless params[:content].blank? or params[:content] == nil
        conversation.messages.create(:user_id =>params[:id], :sender_id => current_user.id, :content=> params[:content])
        if conversation.save
         Notification.create(:notification_type=>"Message",:notification_type_id=>conversation.messages.last.id,:user_id=>params[:id],:secondary_user=>current_user.id)
         flash[:notice]="Message has been sent"
        else
          flash[:notice]="Something went wrong, please resend the message"
        end 
      else
        flash[:notice]="Please enter your message content"
      end         
    end 
    respond_to do |format|
      format.html{redirect_to conversation_path(:id=>conversation.id)}
    end       
  end

  
  def message
    @conversations = Conversation.where(["user_id = ? or recipient_id = ?",current_user.id,current_user.id]).order('created_at DESC')
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
