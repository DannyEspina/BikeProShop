require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
   def setup
    @user = users(:michael)
  end
  
 test "login with invalid information" do
  
    get index_path
    assert_template 'index'
    post index_path, params: { session: { email: "", password: "" } }
    assert_template 'index'
    assert_not flash.empty?
    get gallery_path
    assert flash.empty?
  end
  
  test "login with valid information followed by logout" do
   
    get index_path
    post index_path, params: { session: { email:    @user.email,
                                          password: 'password' } }
    assert is_logged_in?                             
    assert_redirected_to @user
    follow_redirect!
    assert_template 'users/show'
    assert_select "a[href=?]", index_path
    assert_select "a[href=?]", user_path(@user)
    
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to root_url
    follow_redirect!
    assert_select "a[href=?]", index_path
    assert_select "a[href=?]", logout_path,      count: 0
    assert_select "a[href=?]", user_path(@user), count: 0
  end
  
end
