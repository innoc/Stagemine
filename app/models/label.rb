class Label < ActiveRecord::Base
belongs_to :video
belongs_to :interest
belongs_to :word
belongs_to :image
end
