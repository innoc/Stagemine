class CreateLeagues < ActiveRecord::Migration
  def change
    create_table :leagues do |t|
      t.integer  :interest_id
      t.integer  :season_id
      t.string   :status
      t.integer  :enrollment_limit
      t.integer  :cheers_to_qualify
      t.timestamps
    end
  end
end
