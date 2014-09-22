class CreateBadgeAllocations < ActiveRecord::Migration
  def change
    create_table :badge_allocations do |t|
      t.integer :user_id
      t.integer :badge_id
      t.integer :task_name
      t.timestamps
    end
  end
end
