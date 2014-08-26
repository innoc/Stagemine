class AddImageMetaToPictures < ActiveRecord::Migration
  def change
    add_column :pictures, :image_meta, :string
  end
end
