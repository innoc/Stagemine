class Point < ActiveRecord::Base
  belongs_to  :user
  belongs_to  :cheer
  belongs_to  :user_interest 
end
