module PointAllocationHelper

  def already_cheered?(user,post)
    return true if post.cheers.where(:cheerer_id=>user.id).count > 0 
    return false
  end

  def already_voted?(user,post)
    return true if post.votes.where(:voter_id=>user.id).count > 0 
    return false
  end

  def cheer_access?(post)
    user = post.user
    if post.label.try(:interest).try(:leagues).try(:last).try(:status) == "active"
      return user.leagues.include?(post.label.interest.leagues.last)
    end
  end
end
