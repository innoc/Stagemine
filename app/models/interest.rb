class Interest < ActiveRecord::Base
  has_many :user_interests
  has_many :users, :through=> :user_interests
  has_many :feeds, :dependent=>:destroy 
  has_many :labels, :dependent=>:destroy
  has_many :leagues, :dependent=>:destroy
end
