class Word < ActiveRecord::Base
has_one :feed,:dependent=>:destroy, autosave: true
has_one :label,:dependent=>:destroy , autosave:true
belongs_to :user
end
