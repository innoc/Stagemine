class CreateWinnerNotificationChecks < ActiveRecord::Migration
  def change
    create_table :winner_notification_checks do |t|
      t.integer :user_id
      t.integer :season_winner_notification_id
      t.string :interest_name
      t.timestamps
    end
  end
end
