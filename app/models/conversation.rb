class Conversation < ActiveRecord::Base
  has_many :messages
  belongs_to :user
  belongs_to :recipient, :class_name => 'User', :foreign_key =>'recipient_id'
end
