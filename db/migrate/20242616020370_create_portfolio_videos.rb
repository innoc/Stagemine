class CreatePortfolioVideos < ActiveRecord::Migration
  def change
    create_table :portfolio_videos do |t|
      t.string :vid
      t.integer  :portfolio_cover_id
      t.timestamps
    end
  end
end
