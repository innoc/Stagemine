class CreateHistorypendings < ActiveRecord::Migration
  def change
    create_table :historypendings do |t|
      t.integer :season_id 
      t.string  :historypending
      t.timestamps
    end
  end
end
