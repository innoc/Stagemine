class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :video
  belongs_to :task
end
