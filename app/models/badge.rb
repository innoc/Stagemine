class Badge < ActiveRecord::Base
    has_many :league_enrollments, :dependent=>:destroy
end
