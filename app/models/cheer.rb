class Cheer < ActiveRecord::Base
  belongs_to :user
  belongs_to :word
  belongs_to :picture
  belongs_to :video
  has_many :points, autosave: true
  belongs_to :league


end
