class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :user_id
      t.integer :user_interest_id
      t.integer :status
      t.decimal :previous_point       
      t.decimal :point
      t.timestamps
    end
  end
end
