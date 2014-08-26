class Userhistory < ActiveRecord::Base
  has_one :pointhistory,:dependent=>:destroy , autosave:true
end
