# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
# => admin stage
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create([{user_name: "Admin",first_name: "Admin",last_name: "Admin",email: "admin@stagemine.com",password: "369a26b1649cea05cd78df3c15adbb2fb3bcfe6a",gender: "none",usertype: "admin", activated: "Yes", created_at: "2014-10-06 17:03:58.759516", updated_at: "2014-10-06 17:03:58.759516"}])


Rankdetail.create([{ name: "Green Stage", rank_max_point: 299, rank_min_point: 0 , rank_color: "lightgreen"},
                    { name: "Blue Stage", rank_max_point: 599 , rank_min_point: 300, rank_color: "lightblue"},
                    { name: "Red Stage", rank_max_point: 999 , rank_min_point: 600, rank_color: "red"},
                    { name: "Gold Stage", rank_max_point: 1000, rank_min_point: 1000, rank_color: "gold"}])

Badge.create([{ name: "Bronze", priority:0},
                    { name: "Ruby", priority:1},
                    { name: "Sapphire", priority:2},
                    { name: "Silver", priority:3},
                    { name: "Gold", priority:4}
                    ])

Pointdata.create([{point_number: 5, picture_divider:3, word_divider:5, vote_adder:5}])

Interest.create([{interest_name:"Random"},{interest_name:"Breakdancing and popping"},{interest_name:"Hip Hop"},{interest_name:"Contemporary"},{interest_name:"Ballet"},{interest_name:"Salsa"}])
