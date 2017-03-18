require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get signUp" do
    get users_signUp_url
    assert_response :success
  end

  test "should get logIn" do
    get users_logIn_url
    assert_response :success
  end

end
