module Helpers
  def login(username, password)
    post '/authentication', params: {
      username: username,
      password: password
    }

    assert_response :redirect
    follow_redirect!
  end
end