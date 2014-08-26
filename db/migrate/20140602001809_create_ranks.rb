class CreateRanks < ActiveRecord::Migration
  def change
    create_table :ranks do |t|
      t.integer :user_id
      t.integer  :rankdetail_id
      t.timestamps
    end
  end
end
