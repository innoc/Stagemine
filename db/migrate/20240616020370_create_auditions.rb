class CreateAuditions < ActiveRecord::Migration
  def change
    create_table :auditions do |t|
      t.integer  :user_id
      t.integer  :season_id
      t.integer  :league_id
      t.string   :status, :default=> "active"
      t.string   :qualified, :default=>"No"
      t.timestamps
    end
  end
end
