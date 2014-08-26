class Word < ActiveRecord::Base
has_one :feed,:dependent=>:destroy, autosave: true
has_one :label,:dependent=>:destroy , autosave:true
has_many :cheers, :dependent=>:destroy  
belongs_to :user
end
