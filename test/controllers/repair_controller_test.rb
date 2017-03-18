require 'test_helper'

class RepairControllerTest < ActionDispatch::IntegrationTest
  test "should get repair" do
    get repair_repair_url
    assert_response :success
  end

end
