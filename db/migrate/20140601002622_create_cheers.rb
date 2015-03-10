class CreateCheers < ActiveRecord::Migration
  def change
    create_table :cheers do |t|
      t.integer :user_id
      t.integer :cheer_number
      t.integer :cheerer_id
      t.integer :video_id
      t.integer :league_id
      t.timestamps
    end
  end
end
