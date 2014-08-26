class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :feed_id
      t.integer :user_id
      t.timestamps
    end
  end
end
