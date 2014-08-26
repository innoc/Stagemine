class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name 
      t.string :first_name
      t.string :last_name 
      t.string :email 
      t.string :password   
      t.string :gender
      t.string :usertype
      t.string :activated
      t.timestamps
    end
  end
end
