class Pointhistory < ActiveRecord::Base
  belongs_to :user
  belongs_to :season
end
