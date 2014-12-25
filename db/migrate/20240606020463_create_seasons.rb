class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.string   :incentive
      t.string   :status
      t.string   :name
      t.text     :description
      t.timestamps
    end
  end
end
