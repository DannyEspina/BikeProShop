require 'test_helper'

class ShopControllerTest < ActionDispatch::IntegrationTest
  test "should get topBikes" do
    get shop_topBikes_url
    assert_response :success
  end

  test "should get parts" do
    get shop_parts_url
    assert_response :success
  end

  test "should get accessories" do
    get shop_accessories_url
    assert_response :success
  end

end
