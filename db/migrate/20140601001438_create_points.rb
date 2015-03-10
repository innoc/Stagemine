class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :user_id
      t.integer :status 
      t.integer :point
      t.timestamps
    end
  end
end
