class CommentController < ApplicationController

 def create_comment
    
   if request.post?
         
        unless params[:content].blank?   
           @feed_id = Feed.find(params[:feed_id])
           @user = current_user
           session[:return_to] ||= request.referer
           @comment = Comment.new()
           @comment.content = params[:content]
           @comment.feed_id = params[:feed_id]
           @comment.user_id = current_user.id
           @comment.save
        end  
       respond_to do |format| 
         format.html{redirect_to session.delete(:return_to)}
         format.js
       end
   end   

 end 
 
 
 
 def all_comment
       @feed_id = Feed.find(params[:feed_id])
       @user = current_user
       if request.post?
       session[:return_to] ||= request.referer
       @comment = Comment.new()
       @comment.content = params[:content]
       @comment.feed_id = params[:feed_id]
       @comment.user_id = current_user.id
       @comment.save
          
       respond_to do |format| 
         format.html{redirect_to session.delete(:return_to)}
         format.js
       end
      end 
 end
private 
 def resolve_layout
    case action_name
    when 'all_comment'
      nil
    else
      'application'
    end
 end
end
