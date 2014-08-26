class CreateFeedDestributions < ActiveRecord::Migration
  def change
    create_table :feed_destributions do |t|
      t.integer :user_id
      t.integer :feed_id
      t.timestamps
    end
  end
end
