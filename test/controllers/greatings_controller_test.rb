require "test_helper"

class GreatingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get greatings_index_url
    assert_response :success
  end
end
