class CreateLeagues < ActiveRecord::Migration
  def change
    create_table :leagues do |t|
      t.integer  :interest_id
      t.integer  :season_id
      t.string   :status
      t.timestamps
    end
  end
end
