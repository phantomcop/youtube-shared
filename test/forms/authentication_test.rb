require 'test_helper'

class AuthenticationTest < ActiveSupport::TestCase
  test 'Should return false when pass blank params' do
    authetication = Authentication.new({})

    assert_equal authetication.save, false
    assert_equal(
      authetication.errors.full_messages.to_sentence,
      "Username can't be blank and Password can't be blank"
    )
  end
end