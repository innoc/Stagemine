class CreateSeasonWinnerNotifications < ActiveRecord::Migration
  def change
    create_table :season_winner_notifications do |t|
      t.integer :season_id
      t.string  :status, :default=>"active"
      t.timestamps
    end
  end
end
