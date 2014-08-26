module PointAllocationHelper

def user_notify(user,post)
    @post_cheers= post.cheers
    for post_list in @post_cheers
         if post_list.cheerer_id == user.id
            user_status = 1
         end
    end
    
    if user_status.nil?
        return "no"
    else
        return "yes"
    end
end
end
