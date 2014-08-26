class CreatePointdata < ActiveRecord::Migration
  def change
    create_table :pointdata do |t|
      t.integer  :point_number
      t.decimal  :picture_divider
      t.integer  :word_divider
      t.decimal  :vote_adder 
      t.timestamps
    end
  end
end
