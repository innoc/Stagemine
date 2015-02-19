module PortfolioHelper
  def has_portfolio_content(user_id)
    user = User.find(user_id)
    if user.portfolio_cover.nil?
      return "no"
    end    
  end
end
