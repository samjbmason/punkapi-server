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

ActiveRecord::Schema.define(version: 20160306093613) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beers", force: :cascade do |t|
    t.string   "name"
    t.string   "tagline"
    t.date     "first_brewed"
    t.text     "description"
    t.float    "abv"
    t.float    "ibu"
    t.float    "target_fg"
    t.float    "target_og"
    t.float    "ebc"
    t.float    "srm"
    t.float    "ph"
    t.float    "attenuation_level"
    t.jsonb    "mash_temp"
    t.float    "fermentation_temp"
    t.text     "twist"
    t.jsonb    "malt"
    t.jsonb    "hops"
    t.string   "yeast"
    t.string   "food_pairing",      default: [],              array: true
    t.text     "brewers_tips"
    t.string   "contributed_by"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "api_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
