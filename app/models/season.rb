class Season < ActiveRecord::Base
  has_many :leagues
  has_many :historypendings, :dependent=>:destroy
  has_many :auditions, :dependent=>:destroy
  has_one  :preseason, :dependent=>:destroy
  has_one  :season_winner_notification
  
  def self.league_table(league_id, user_id)    
    league = League.find(league_id)
    if league.season.status == "active"
      enrolled_users_list = league.users.select(:id)
      unless league.blank?
        enrolled_users=[]        
        for user in enrolled_users_list
          enrolled_users << user.id
          if user.id == User.find(user_id)
            current_user_enrolled = true
          end
        end
      end
      unless enrolled_users.blank?
        if enrolled_users.length == 1 
          return enrolled_users                       
        else
          i = enrolled_users.length - 1
          while i > 0 do
            first = 0 
            j = 1
            while j <= i do 
              first_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[j], league.id]).inject(0){|sum,e| sum += e.cheer_number}
              second_user_cheers = Cheer.where(["user_id = ? and league_id = ?",enrolled_users[first], league.id]).inject(0){|sum,e| sum += e.cheer_number}
              if first_user_cheers.blank? 
                first = j
              else
                unless second_user_cheers.blank?
                  if first_user_cheers <  second_user_cheers
                    first = j
                  else
                    if first_user_cheers == second_user_cheers
                      enrollment_time_j = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[j]) , league_id: league_id}]).last.created_at
                      enrollment_time_first = LeagueEnrollment.where(["user_id = :user_id and league_id = :league_id", { user_id: User.find(enrolled_users[first]) , league_id: league_id}]).last.created_at
                      if enrollment_time_j > enrollment_time_first
                        first = j
                      end 
                    end
                  end
                end
              end
              j = j + 1
            end
            temp = enrolled_users[first]
            enrolled_users[first] = enrolled_users[i]
            enrolled_users[i] = temp
            i = i - 1
          end           
          return enrolled_users
        end 
      else
        return -1
      end #end of unless statement
    else
      if league.season.status == "complete" 
        return 0
      end
    end 
  end
end