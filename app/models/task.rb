class Task < ActiveRecord::Base
  has_one :label, :dependent=>:destroy,autosave:true
  has_many :users ,  :through=> :enrolls
  has_many :enrolls, :dependent=>:destroy
  has_one :feed, :dependent=>:destroy
  has_one :winner, :dependent=>:destroy
  has_many :videos, :dependent=>:destroy
  has_many :task_points, :dependent=>:destroy
  
end
