class CreateRankdetails < ActiveRecord::Migration
  def change
    create_table :rankdetails do |t|
       t.string :name
       t.integer :rank_max_point
       t.integer :rank_min_point
       t.string :rank_color
      t.timestamps
    end
  end
end
