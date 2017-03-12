require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  
  test "should get home" do
   get home_index_url
   assert_response :success 
   assert_select "title", "Home | BikeProShop"
  end
end
