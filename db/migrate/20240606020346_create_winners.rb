class CreateWinners < ActiveRecord::Migration
  def change
    create_table :winners do |t|
      t.integer :task_id
      t.integer :user_id
      t.timestamps
    end
  end
end
