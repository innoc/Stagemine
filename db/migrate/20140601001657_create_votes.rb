class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer  :task_id
      t.integer  :vote_number
      t.timestamps
    end
  end
end
