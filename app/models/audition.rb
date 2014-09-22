class Audition < ActiveRecord::Base
   
  belongs_to :season
  belongs_to :user
  belongs_to :league 
  has_one    :video
  
  
  def self.audition_check(user_id,league_id)
      user = User.find(user_id)
      if (audition = user.auditions.where(:league_id => league_id)[0]).blank?
        return  "Yes" #means that user is allowed to audition
      else 
        return audition   #the user has already auditioned
      end     
  end
  
end
