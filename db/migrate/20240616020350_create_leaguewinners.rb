class CreateLeaguewinners < ActiveRecord::Migration
  def change
    create_table :leaguewinners do |t|
      t.integer :user_id
      t.integer :league_id
      t.integer :position
      t.timestamps
    end
  end
end
