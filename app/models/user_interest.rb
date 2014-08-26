class UserInterest < ActiveRecord::Base
  belongs_to :user
  belongs_to :interest
  has_one :point
end
