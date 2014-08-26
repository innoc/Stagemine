class CreateTaskPoints < ActiveRecord::Migration
  def change
    create_table :task_points do |t|
      t.integer :user_id
      t.decimal :previous_point 
      t.decimal :point
      t.integer :task_id
      t.integer :status 
      t.timestamps
    end
  end
end
