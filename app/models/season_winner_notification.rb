class SeasonWinnerNotification < ActiveRecord::Base
  belongs_to :season
  has_many :winner_notification_checks 
end
