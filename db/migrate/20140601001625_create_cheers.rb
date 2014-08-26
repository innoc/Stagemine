class CreateCheers < ActiveRecord::Migration
  def change
    create_table :cheers do |t|
      t.integer :user_id
      t.integer :cheerer_id
      t.integer  :cheer_number
      t.integer  :video_id
      t.integer  :word_id 
      t.integer  :picture_id
      t.integer  :interest_id
      t.integer :task_id
      t.timestamps
    end
  end
end
