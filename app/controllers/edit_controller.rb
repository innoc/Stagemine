class EditController < ApplicationController
  
  def edit
    
  end
  
  def user_avatar
   session[:return_to] ||= request.referer
   @image = User.find(current_user.id).userimage
   @user= current_user
    if @image.blank?
      @image = Userimage.new(image_params)
      @image.user_id = @user.id
      @image.save
      flash[:notice] = "Your image was updated"
    else
      @image.update_attributes(image_params)
      flash[:notice] = "Your image was updated"
    end
    redirect_to portfolio_path(:id=>current_user.id)
  end
  
  def alter
    @user_detail = current_user
  end
 
def image_params
  #params.require(:picture).permit(:image, :content)
  params.require(:userimage).permit(:image)
  #params.require(:picture).permit(:user_id, :image_file_name,:image_content_type,:image_file_size,:image_updated_at,:description) if params[:picture] 
end

end
