class PortfolioCover < ActiveRecord::Base
  belongs_to :user
  has_one :portfolio_image, :dependent=>:destroy
  has_one :portfolio_video, :dependent=>:destroy   
end
