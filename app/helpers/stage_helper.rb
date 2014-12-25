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

end
