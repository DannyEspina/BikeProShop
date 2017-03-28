require 'test_helper'

class ShopControllerTest < ActionDispatch::IntegrationTest
  test "should get topBikes" do
    get topBikes_url
    assert_response :success
  end

  test "should get parts" do
    get parts_url
    assert_response :success
  end

  test "should get accessories" do
    get accessories_url
    assert_response :success
  end

end
