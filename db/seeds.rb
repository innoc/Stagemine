# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Rankdetail.create([{ name: "Green Stage", rank_max_point: 299, rank_min_point: 0 , rank_color: "lightgreen"},
                    { name: "Blue Stage", rank_max_point: 599 , rank_min_point: 300, rank_color: "lightblue"},
                    { name: "Red Stage", rank_max_point: 999 , rank_min_point: 600, rank_color: "red"},
                    { name: "Black Stage", rank_max_point: 1000, rank_min_point: 1000, rank_color: "black"}])

Badge.create([{ name: "Bronze", priority:1},
                    { name: "Ruby", priority:2},
                    { name: "Sapphire", priority:3},
                    { name: "Silver", priority:4},
                    { name: "Gold", priority:5}
                    ])

Pointdata.create([{point_number: 5, picture_divider:3, word_divider:5, vote_adder:5}])

Interest.create([{interest_name:"Random"},{interest_name:"Salsa"},{interest_name:"Hip Hop"},interest_name:"Latin Dance"])
