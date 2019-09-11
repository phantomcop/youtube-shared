class VoteOperations::Create
  attr_reader :error, :vote

  def initialize(user:,post_id:, vote_type:)
    @user = user
    @post = Post.find(post_id)
    @vote_type = vote_type
    @error = ''
  end

  def call
    begin
      raise "Already voted" if @post.voted_by?(@user)

      @vote = Vote.create!(
        post_id: @post.id,
        user_id: @user.id,
        kind: @vote_type
      )
      true
    rescue StandardError => e
      @error = e.message
      false
    end
  end
end
