require 'test_helper'

class PostFlowsTest < ActionDispatch::IntegrationTest
  include Helpers

  test 'Cannot navigate to post new page when user is not login yet' do
    get '/posts/new'
    assert_response :redirect
    follow_redirect!
    assert_response :success
    assert_select 'p', 'Please login to continue'
  end

  test 'Can navigate to post new page when user is already logged in' do
    login('dthtien', '123123')
    get '/posts/new'
    assert_select 'h6', 'Share a youtube movie'
  end

  test 'Can not post invalid youtube url' do
    login('dthtien', '123123')
    post '/posts', params: {
      post: {url: 'test'}
    }

    assert_select 'p', 'Url Invalid Url'
  end

  test 'Can post valid youtube url' do
    login('dthtien', '123123')
    Post.destroy_all
    post '/posts', params: {
      post: {url: 'https://www.youtube.com/watch?v=2nqIAOU34jI&list=RDMMpfVODjDBFxU&index=32'}
    }

    assert_response :redirect
    follow_redirect!
    assert_response :success
    assert_select 'p', 'We are getting video information'
  end
end
