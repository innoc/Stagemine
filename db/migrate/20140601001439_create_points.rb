class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :user_id
      t.integer :status 
      t.string  :point_source      
      t.integer :point
      t.integer :previous_point
      t.timestamps
    end
  end
end
