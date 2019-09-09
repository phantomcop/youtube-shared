class PostsOperations::Create
  def initialize(params)
    @params = params
  end

  def call
    post = Post.new(post_params)
    post.user = User.first
    post.url =  post.url.split('&')[0]

    if post.save
      { success: 'Post was successfully created' }
    else
      { error: post.errors.full_messages.to_sentence }
    end
  end

  private

  def post_params
    @params.require(:post).permit(:url)
  end
end
