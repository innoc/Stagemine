class Feed < ActiveRecord::Base
  # attr_accessible :title, :body
belongs_to :user
belongs_to :word
belongs_to :picture
belongs_to :video
belongs_to :rank
belongs_to :task
belongs_to :interest
has_many :comments

end

