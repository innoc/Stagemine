class User < ActiveRecord::Base
has_many :user_interests,:dependent=>:destroy
has_many :interests,:through=> :user_interests ,:dependent=>:destroy, autosave: true
has_many :league_enrollments
has_many :leagues, :through=> :league_enrollments, :dependent=>:destroy
has_many :badge_allocations,:dependent=>:destroy
has_many :tasks, :through=> :enrolls
has_many :winners, :dependent=>:destroy
has_many :enrolls, :dependent=>:destroy
has_many :videos, :dependent=>:destroy  
has_many :pictures, :dependent=>:destroy  
has_many :feeds, :dependent=>:destroy
has_many :words, :dependent=>:destroy 
has_many :friends, :through => :friendships
has_many :messages, :dependent=> :destroy
has_many :friendships, :dependent => :destroy 
has_many :comments, :dependent=>:destroy
has_many :cheers, :dependent=>:destroy
has_many :points, :dependent=>:destroy
has_one  :userimage, :dependent=>:destroy
has_one  :rank, :dependent=>:destroy, autosave: true
has_many :notifications, :dependent=>:destroy
has_many :task_points, :dependent=>:destroy
has_many :Leaguewinners, :dependent=>:destroy
has_many :pointhistories, :dependent=> :destroy
has_many :auditions, :dependent=>:destroy


validates_confirmation_of :password, :message => "Password doesnt match"
validates :password, confirmation: true
validates_presence_of :first_name,:last_name,:email,:password,:gender,:activated
before_save :encrypt_new_password

def self.authenticate(user_name, password)
    user = find_by_user_name(user_name)
    return user if user && user.authenticated?(password)
end

def self.searchsuggestion(prefix)
  suggestions = User.where("user_name ILIKE ? OR first_name ILIKE ? OR last_name ILIKE ?", "#{prefix}%","#{prefix}%","#{prefix}%")
  return suggestions.limit(10)
end

def authenticated?(password)
self.hashed_password == encrypt(password)
end

def authenticated?(password)
self.password == encrypt(password)
end
protected
def encrypt_new_password
return if password.blank?
self.password = encrypt(password)
end
def password_required?
hashed_password.blank? || password.present?
end
def encrypt(string)
Digest::SHA1.hexdigest(string)
end
  
end
