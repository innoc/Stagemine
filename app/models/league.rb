class League < ActiveRecord::Base
  belongs_to :season
  has_many :league_enrollments
  has_many :users, :through=> :league_enrollments
  belongs_to :interest
  has_many :leaguewinners
  has_many :auditions
end
