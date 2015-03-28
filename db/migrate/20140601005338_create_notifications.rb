class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string  :notification_type
      t.integer :notification_type_id
      t.integer :user_id
      t.integer :status, default: 0
      t.integer :point_count
      t.integer :secondary_user
      t.timestamps
    end
  end
end
