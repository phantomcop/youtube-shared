class PostsController < ApplicationController
  def create
    post = Post.new(post_params)
    post.user = User.first
    post.url = formart_url(post.url)

    notice = if post.save
               { success: 'Post was successfully created' }
             else
               { error: post.errors.full_messages.to_sentence }
             end
    redirect_to root_path, flash: notice
  end

  private

  def post_params
    params.require(:post).permit(:url)
  end

  def formart_url(url)
    url.split('&')[0]
  end
end
