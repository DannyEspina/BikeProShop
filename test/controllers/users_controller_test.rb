require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get new_url
    assert_response :success
  end

  test "should get login" do
    get login_url
    assert_response :success
  end

end
