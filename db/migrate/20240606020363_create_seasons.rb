class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.string   :status 
      t.string   :name
      t.timestamps
    end
  end
end
