class CreatePortfolioCovers < ActiveRecord::Migration
  def change
    create_table :portfolio_covers do |t|
      t.integer :user_id
      t.string :cover_type
      t.timestamps
    end
  end
end
