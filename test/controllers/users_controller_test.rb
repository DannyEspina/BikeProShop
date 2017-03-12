require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  def setup 
    @base_title = "BikeProShop"
  end
  test "should get signUp" do
    get users_signUp_url
    assert_response :success
    assert_select "title", "Sign Up | #{@base_title}"
  end

  test "should get logIn" do
    get users_logIn_url
    assert_response :success
    assert_select "title", "Login | #{@base_title}"
  end

end
