class CreatePointhistories < ActiveRecord::Migration
  def change
    create_table :pointhistories do |t|
      t.integer :position
      t.integer :point
      t.integer :interest_id
      t.integer :season_id
      t.integer :user_id
      t.timestamps
    end
  end
end

