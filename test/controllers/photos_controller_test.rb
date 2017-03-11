require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get gallery" do
    get photos_gallery_url
    assert_response :success
  end

end
