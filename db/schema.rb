# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20240616020373) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auditions", force: true do |t|
    t.integer  "user_id"
    t.integer  "season_id"
    t.integer  "league_id"
    t.string   "status",     default: "active"
    t.string   "qualified",  default: "No"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "badge_allocations", force: true do |t|
    t.integer  "user_id"
    t.integer  "badge_id"
    t.string   "task_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "badges", force: true do |t|
    t.string   "name"
    t.integer  "priority"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cheers", force: true do |t|
    t.integer  "user_id"
    t.integer  "cheerer_id"
    t.integer  "cheer_number"
    t.integer  "video_id"
    t.integer  "word_id"
    t.integer  "picture_id"
    t.integer  "interest_id"
    t.integer  "task_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: true do |t|
    t.text     "content"
    t.integer  "feed_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "enrolls", force: true do |t|
    t.integer  "user_id"
    t.integer  "task_id"
    t.integer  "status",     default: 1
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "feed_destributions", force: true do |t|
    t.integer  "user_id"
    t.integer  "feed_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "feeds", force: true do |t|
    t.string   "feed_name"
    t.integer  "secondary_user_id"
    t.integer  "user_id"
    t.integer  "word_id"
    t.integer  "picture_id"
    t.integer  "video_id"
    t.integer  "challenge_id"
    t.integer  "task_id"
    t.integer  "interest_id"
    t.integer  "rank_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "friendships", force: true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.integer  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "historypendings", force: true do |t|
    t.integer  "season_id"
    t.string   "historypending"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "interests", force: true do |t|
    t.string   "interest_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "labels", force: true do |t|
    t.integer  "video_id"
    t.integer  "word_id"
    t.integer  "picture_id"
    t.integer  "interest_id"
    t.integer  "task_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "league_enrollments", force: true do |t|
    t.integer  "user_id"
    t.integer  "league_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "leagues", force: true do |t|
    t.integer  "interest_id"
    t.integer  "season_id"
    t.string   "status"
    t.integer  "enrollment_limit"
    t.integer  "cheers_to_qualify"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "leaguewinners", force: true do |t|
    t.integer  "user_id"
    t.integer  "league_id"
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: true do |t|
    t.integer  "user_id"
    t.integer  "sender_id"
    t.text     "content"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notifications", force: true do |t|
    t.integer  "cheer_storage"
    t.string   "notification_type"
    t.integer  "notification_type_id"
    t.integer  "user_id"
    t.integer  "status",               default: 0
    t.integer  "notification_counter"
    t.integer  "secondary_user"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pictures", force: true do |t|
    t.integer  "user_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_meta"
  end

  create_table "pointdata", force: true do |t|
    t.integer  "point_number"
    t.decimal  "picture_divider"
    t.integer  "word_divider"
    t.decimal  "vote_adder"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pointhistories", force: true do |t|
    t.integer  "position"
    t.integer  "point"
    t.integer  "interest_id"
    t.integer  "season_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "points", force: true do |t|
    t.integer  "user_id"
    t.integer  "user_interest_id"
    t.integer  "status"
    t.decimal  "previous_point"
    t.decimal  "point"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "preseasons", force: true do |t|
    t.integer  "season_id"
    t.datetime "start_day"
    t.datetime "end_day"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rankdetails", force: true do |t|
    t.string   "name"
    t.integer  "rank_max_point"
    t.integer  "rank_min_point"
    t.string   "rank_color"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ranks", force: true do |t|
    t.integer  "user_id"
    t.integer  "rankdetail_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "seasons", force: true do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.string   "incentive"
    t.string   "status"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "task_points", force: true do |t|
    t.integer  "user_id"
    t.decimal  "previous_point"
    t.decimal  "point"
    t.integer  "task_id"
    t.integer  "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", force: true do |t|
    t.integer  "admin_id"
    t.string   "title"
    t.text     "description"
    t.text     "video_url"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string   "task_type"
    t.string   "status",      default: "active"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_interests", force: true do |t|
    t.integer  "user_id"
    t.integer  "interest_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "userimages", force: true do |t|
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "user_name"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.string   "gender"
    t.string   "usertype"
    t.string   "activated"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "videos", force: true do |t|
    t.integer  "user_id"
    t.string   "vid"
    t.text     "description"
    t.integer  "task_id"
    t.integer  "audition_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "votes", force: true do |t|
    t.integer  "user_id"
    t.integer  "task_id"
    t.integer  "vote_number"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "winners", force: true do |t|
    t.integer  "task_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "words", force: true do |t|
    t.integer  "user_id"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
