class CreateEnrolls < ActiveRecord::Migration
  def change
    create_table :enrolls, force: true do |t|
      t.integer :user_id
      t.integer :task_id
      t.integer :status, :default=>1
      t.timestamps
    end
  end
end
