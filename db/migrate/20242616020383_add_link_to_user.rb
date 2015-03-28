class AddLinkToUser < ActiveRecord::Migration
  def change
    add_column :users, :portfolio_link, :string
    add_column :users, :youtube_link, :string
  end
end
