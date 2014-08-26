class CreateLabels < ActiveRecord::Migration
  def change
    create_table :labels do |t|
      t.integer  :video_id
      t.integer  :word_id 
      t.integer  :picture_id
      t.integer  :interest_id
      t.integer  :task_id
      t.timestamps
      
    end
  end
end

