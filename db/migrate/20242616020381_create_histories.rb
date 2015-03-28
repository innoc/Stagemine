class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.integer :user_id
      t.string  :competition_type
      t.integer :season_id
      t.integer :task_id
      t.integer :league_id
      t.integer :position
      t.integer :cheer
      t.integer :vote      
      t.timestamps
    end
  end
end
