class Picture < ActiveRecord::Base
    
  has_one :feed, :dependent=>:destroy, autosave: true
  belongs_to :user
  has_many :cheers, :dependent=>:destroy  
  has_one :label,:dependent=>:destroy  ,autosave: true
  has_attached_file :image, :styles => { :large=> "400x",:medium => "330x", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  validates_attachment_presence :image
  validates :image_file_name, :presence=>true
  
end


