class Season < ActiveRecord::Base
  has_many :leagues
  has_many :historypendings, :dependent=>:destroy
  has_many :auditions, :dependent=>:destroy
  has_one  :preseason, :dependent=>:destroy
  has_one  :season_winner_notification
  
   def self.league_top_three(league_id)
     league = League.find(league_id)
     enrolled_users=[]        
      unless league.blank?
        enrolled_users = League.find(league_id).users
        enrolled_users=[]
        
        for user in enrolled_users
          enrolled_users << user.id
        end
                
        if enrolled_users.length == 1
            if user_contained == 1
              enrolled_users << enrolled_users.index(user_id) + 1 
            end
            user_contained = 0     
            return enrolled_users   #error here
        else
             i = enrolled_users.length - 1
             while i > 0 do
                 first = 0 
                 j = 1
                 while j <= i do 
                      first_user_point = UserInterest.where(["user_id = ? and interest_id = ?",enrolled_users[j], league.interest.id])
                      second_user_point = UserInterest.where(["user_id = ? and interest_id = ?",enrolled_users[first], league.interest.id])                           
                      if first_user_point[0].point.blank? 
                        first = j
                      else
                         unless second_user_point[0].point.blank?
                            if first_user_point[0].point.point  <  second_user_point[0].point.point
                                first = j
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
      end 
  end
   
   
  def self.league_table(league_id, user_id)    
    league = League.find(league_id)
    if league.season.status == "active"
      enrolled_users_list = league.users.select(:id)
      unless league.blank?
        enrolled_users=[]        
        for user in enrolled_users_list
          enrolled_users << user.id
        end
      end
      #enrolled_users = enrolled_users.to_a 
      if enrolled_users.include?(User.find(user_id))
        current_user_enrolled = true
      end
      #get the sorted list users
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
    end #end of if statement
  end
     
     
     def self.league_table_admin(league_id, user_id)
         league = League.find(league_id)
         
              enrolled_users = League.find(league_id).users
              enrolled_users=[]
              for user in enrolled_users
                enrolled_users << user.id
                if user.id == user_id
                 user_contained = 1
                end
              end
              #get the sorted list users
              unless enrolled_users.blank?
                    if enrolled_users.length == 1
                      if user_contained == 1
                        enrolled_users << "_#{enrolled_users.index(user_id) + 1}" 
                      else
                        enrolled_users << "blank"
                      end 
                      user_contained = 0     
                      return enrolled_users   #error here
                  else
                       i = enrolled_users.length - 1
                       while i > 0 do
                            first = 0 
                            j = 1
                             while j <= i do 
                                first_user_point = UserInterest.where(["user_id = ? and interest_id = ?",enrolled_users[j], league.interest.id])
                                second_user_point = UserInterest.where(["user_id = ? and interest_id = ?",enrolled_users[first], league.interest.id])                           
                                 
                                if first_user_point[0].point.blank? 
                                first = j
                                else
                                 unless second_user_point[0].point.blank?
                                    if first_user_point[0].point.point  <  second_user_point[0].point.point
                                        first = j
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
                   if user_contained == 1
                     enrolled_users << "_#{enrolled_users.index(user_id) + 1}" 
                   else
                      enrolled_users << "blank"
                   end 
                   user_contained = 0     
                   return enrolled_users
                   end
               end
     end
end
