require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "save user" do
     user = User.new
     assert_not user.save
   end
end
