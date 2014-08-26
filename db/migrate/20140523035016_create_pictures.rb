class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.integer  :user_id
      t.string   :image_file_name
      t.string   :image_content_type
      t.integer  :image_file_size
      t.datetime :image_updated_at
      t.text     :description
      t.timestamps
    end
  end
end
