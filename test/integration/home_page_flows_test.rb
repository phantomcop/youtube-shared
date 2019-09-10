require 'test_helper'
require_relative 'helpers'

class HomePageFlowsTest < ActionDispatch::IntegrationTest
  include Helpers

  test 'Can see the home button' do
    get '/'
    assert_select 'h3', 'Funny Movies'
  end

  test 'Can see authentication form in  un-login case' do
    get '/'
    assert_select 'label', 'Username:'
  end

  test 'Can login with new username and password' do
    username = 'dthtien'
    login(username, '123123')
    assert_select 'h5', "Welcome\n#{username}"
    assert_select 'a', 'Share a movie'
    assert_select 'a', 'Logout'
  end
end
