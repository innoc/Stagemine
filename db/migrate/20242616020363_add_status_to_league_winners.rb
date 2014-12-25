class AddStatusToLeagueWinners < ActiveRecord::Migration
  def change
    add_column :leaguewinners, :status, :string
  end
end
