class Userimage < ActiveRecord::Base   
  belongs_to :user
  has_attached_file :image,:styles=>{:large=>'150x150#',:thumb => '100x100#',:small=>'55x55#',:smallest=>'40x40#',:tiny=>'30x30#', :moderate=>'75x75#'}#,:processors=>[:cropper]
  validates_attachment_presence :image
  validates :image_file_name, :presence=>true
end
