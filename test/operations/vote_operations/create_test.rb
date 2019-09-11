class VoteOperations::CreateTest < ActiveSupport::TestCase
  setup do
    user = users(:one)
    post = posts(:one)

    @operation = VoteOperations::Create.new(
      user: user,
      post_id: post.id,
      vote_type: 'up'
    )
  end

  test 'Should get true when pass valid data' do
    Vote.destroy_all
    assert_equal @operation.call, true
  end

  test 'Should get false when pass old value' do
    assert_equal @operation.call, false
    assert_equal @operation.error, 'Already voted'
  end
end
