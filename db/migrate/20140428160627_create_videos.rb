class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :user_id 
      t.string  :vid
      t.text    :description
      t.integer :task_id
      t.integer :audition_id
      t.timestamps
    end
  end
end
