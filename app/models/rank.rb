class Rank < ActiveRecord::Base
  belongs_to :user
  belongs_to :rankdetail
  has_one :feed , :dependent=>:destroy  
end
