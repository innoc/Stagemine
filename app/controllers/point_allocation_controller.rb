require 'competitive_module'
class PointAllocationController < ApplicationController
  include ::CompetitiveModule
  
  def create_cheer
    @post = Video.find(params[:id])
    session[:return_to] ||= request.referer
    if request.post?
      cheer_creation(@post,current_user.id)
      respond_to do |format|
        format.html{redirect_to stage_path}
        format.js
      end 
    end
  end

  def create_vote
    @post = Video.find(params[:id])
    session[:return_to] ||= request.referer
    if request.post?
      vote_creation(@post,current_user.id)
      respond_to do |format|
        format.html{redirect_to stage_path}
        format.js
      end 
    end
  end

end