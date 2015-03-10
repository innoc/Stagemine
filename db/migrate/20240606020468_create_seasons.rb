class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.integer  :first_place
      t.integer  :second_place
      t.integer  :third_place
      t.integer  :fourth_place
      t.integer  :fifth_place
      t.integer  :other_positions
      t.string   :status
      t.string   :name
      t.text     :description
      t.timestamps
    end
  end
end
