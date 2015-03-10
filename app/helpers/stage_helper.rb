module StageHelper

	def userhistory(interest_id,user_id)
		interest = Interest.find(interest_id)
		season = interest.leagues.last.season
		user_history = Pointhistory.where(:user_id=>user_id, :season_id=>season.id, :interest_id=>interest).first	
		return user_history
	end

	def league_winner(interest_id)
		return Interest.find(interest_id).leagues.last.leaguewinners
	end

	def get_first(winners)
		for winner in winners
			return winner if winner.position == 1
		end  
	end

	def generate_season_interest(filter_code,random_interest)
		if filter_code == "all" or filter_code == "fan" or filter_code == "fanned" or filter_code == "task"  or filter_code.blank?
			interest_season = random_interest[0]
		else
			interest_season = Interest.find(filter_code)
			if interest_season.interest_name == "Random"
				interest_season = random_interest[0] 
			end
		end	
		return interest_season
	end
end