class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :voter_id
      t.integer  :task_id
      t.integer  :vote_number
      t.integer  :video_id
      t.timestamps
    end
  end
end
