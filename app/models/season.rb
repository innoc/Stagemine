class Season < ActiveRecord::Base
  has_many :leagues
  has_many :historypendings, :dependent=>:destroy
  has_many :pointhistories
  
   def self.league_top_three(league_id)
     @league = League.find(league_id)
     if @league.season.status == "active"
        @interest_season=[] 
        
        unless @league.blank?
                    @enrolled_users = League.find(league_id).users
                    @interest_season=[]
  
                    for user in @enrolled_users
                      @interest_season << user.id
                    end
                    
                  if @interest_season.length == 1
                      if @user_contained == 1
                        @interest_season << @interest_season.index(user_id) + 1 
                      end
                      @user_contained = 0     
                      return @interest_season   #error here
                  else
                       @i = @interest_season.length - 1
                       while @i > 0 do
                           @first = 0 
                           @j = 1
                           while @j <= @i do 
                                first_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@j], @league.interest.id])
                                second_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@first], @league.interest.id])                           
                                if first_user_point[0].point.blank? 
                                  @first = @j
                                else
                                   unless second_user_point[0].point.blank?
                                      if first_user_point[0].point.point  <  second_user_point[0].point.point
                                          @first = @j
                                      end
                                   end
                                end
                                @j = @j + 1
                           end
                           @temp = @interest_season[@first]
                           @interest_season[@first] = @interest_season[@i]
                           @interest_season[@i] = @temp
                           @i = @i - 1
                       end
                       return @interest_season
                   end
         end
    end 
  end
   
   
   def self.league_table(league_id, user_id)
         @league = League.find(league_id)
         if @league.season.status == "active"
              @enrolled_users = League.find(league_id).users
              @interest_season=[]
              for user in @enrolled_users
                @interest_season << user.id
                if user.id == user_id
                 @user_contained = 1
                end
              end
              #get the sorted list users
              unless @interest_season.blank?
                      if @interest_season.length == 1
                        if @user_contained == 1
                          @interest_season << "_#{@interest_season.index(user_id) + 1}" 
                        else
                          @interest_season << "blank"
                        end                         
                        @user_contained = 0     
                        return @interest_season   #error here                        
                      else
                        @i = @interest_season.length - 1
                        while @i > 0 do
                            @first = 0 
                            @j = 1
                             while @j <= @i do 
                                first_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@j], @league.interest.id])
                                second_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@first], @league.interest.id])                           
                               
                               # first_user_task_points = User.find(@interest_season[@j]).task_points.where(status: 1)
                               # second_user_task_points = User.find(@interest_season[@first]).task_points.where(status: 1)
                               # first_user_point_count = 0
                               # second_user_point_count = 0
                               # unless first_user_task_points.blank?
                               #    for first_task_point in first_user_task_points
                               #      first_user_point_count = first_user_point_count + task_point.point
                               #    end
                               # end
                               # unless second_user_task_points.blank?
                               #    for second_task_point in second_user_task_points
                               #      second_user_point_count = second_user_point_count + task_point.point
                               #    end
                               # end
                                 
                                if first_user_point[0].point.blank? 
                                  @first = @j
                                else
                                 unless second_user_point[0].point.blank?
                                    if first_user_point[0].point.point  <  second_user_point[0].point.point
                                        @first = @j
                                    end
                                 end
                                end
                                  @j = @j + 1
                                end
                                @temp = @interest_season[@first]
                                @interest_season[@first] = @interest_season[@i]
                                @interest_season[@i] = @temp
                                @i = @i - 1
                            end 
                        if @user_contained == 1
                           @interest_season << "_#{@interest_season.index(user_id) + 1}" 
                        else
                            @interest_season << "blank"
                        end 
                        @user_contained = 0     
                        return @interest_season
                   end #end of if statement
               else
                 return 0
               end #end of unless statement
         else
          return 0
         end #end of if statement
     end
     
     
     def self.league_table_admin(league_id, user_id)
         @league = League.find(league_id)
         
              @enrolled_users = League.find(league_id).users
              @interest_season=[]
              for user in @enrolled_users
                @interest_season << user.id
                if user.id == user_id
                 @user_contained = 1
                end
              end
              #get the sorted list users
              unless @interest_season.blank?
                    if @interest_season.length == 1
                      if @user_contained == 1
                        @interest_season << "_#{@interest_season.index(user_id) + 1}" 
                      else
                        @interest_season << "blank"
                      end 
                      @user_contained = 0     
                      return @interest_season   #error here
                  else
                       @i = @interest_season.length - 1
                       while @i > 0 do
                            @first = 0 
                            @j = 1
                             while @j <= @i do 
                                first_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@j], @league.interest.id])
                                second_user_point = UserInterest.where(["user_id = ? and interest_id = ?",@interest_season[@first], @league.interest.id])                           
                                 
                                if first_user_point[0].point.blank? 
                                @first = @j
                                else
                                 unless second_user_point[0].point.blank?
                                    if first_user_point[0].point.point  <  second_user_point[0].point.point
                                        @first = @j
                                    end
                                 end
                                end
                                @j = @j + 1
                              end
                            @temp = @interest_season[@first]
                            @interest_season[@first] = @interest_season[@i]
                            @interest_season[@i] = @temp
                            @i = @i - 1
                        end
                   if @user_contained == 1
                     @interest_season << "_#{@interest_season.index(user_id) + 1}" 
                   else
                      @interest_season << "blank"
                   end 
                   @user_contained = 0     
                   return @interest_season
                   end
               end
     end
end
