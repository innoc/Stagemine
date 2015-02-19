class CreatePortfolioImages < ActiveRecord::Migration
  def change
    create_table :portfolio_images do |t|
      t.string   :image_file_name
      t.string   :image_content_type
      t.integer  :image_file_size
      t.datetime :image_updated_at
      t.integer  :portfolio_cover_id
      t.integer  :margin
      t.timestamps
    end
  end
end
