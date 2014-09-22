class CreatePreseasons < ActiveRecord::Migration
  def change
    create_table :preseasons do |t|
      t.integer  :season_id
      t.datetime :start_day
      t.datetime :end_day
      t.string   :status
      t.timestamps
    end
  end
end
