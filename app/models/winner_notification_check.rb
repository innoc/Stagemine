class WinnerNotificationCheck < ActiveRecord::Base
	belongs_to :user 
	belongs_to :season_winner_notification
end
