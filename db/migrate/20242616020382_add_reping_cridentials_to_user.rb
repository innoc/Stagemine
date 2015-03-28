class AddRepingCridentialsToUser < ActiveRecord::Migration
  def change
    add_column :users, :country_supported, :string
    add_column :users, :city_supported, :string
    add_column :users, :school_supported, :string
  end
end


