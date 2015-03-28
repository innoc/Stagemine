class PortfolioImage < ActiveRecord::Base
    belongs_to  :portfolio_cover 

    has_attached_file :image,:styles=>{:moderate=>'960x'}
    validates :image_file_name, :presence=>true
end
