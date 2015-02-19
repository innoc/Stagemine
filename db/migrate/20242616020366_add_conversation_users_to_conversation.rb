class AddConversationUsersToConversation < ActiveRecord::Migration
  def change
    add_column :conversations, :user_id, :integer
    add_column :conversations, :recipient_id, :integer
  end
end
