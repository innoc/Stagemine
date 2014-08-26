class CreateFeeds < ActiveRecord::Migration
  def change
    
    create_table :feeds do |t|
       t.string  :feed_name
       t.integer :secondary_user_id 
       t.integer :user_id
       t.integer :word_id
       t.integer :picture_id
       t.integer :video_id
       t.integer :challenge_id
       t.integer :task_id
       t.integer :interest_id
       t.integer :rank_id
       t.timestamps
    end
    
  end
end
