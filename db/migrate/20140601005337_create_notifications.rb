class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :cheer_storage
      t.string  :notification_type
      t.integer :notification_type_id
      t.integer :user_id
      t.integer :status, default: 0
      t.integer :notification_counter 
      t.integer :secondary_user
      t.timestamps
    end
  end
end
