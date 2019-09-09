class PostsController < ApplicationController
  before_action :authenticate_user!

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    @post.url =  @post.url.split('&')[0]

    if @post.save
      flash[:info] = 'We are getting video information'
      redirect_back_or(root_path)
    else
      flash[:error] = @post.errors.full_messages.to_sentence
      render :new
    end
  end

  def new
    @post = Post.new
  end

  private

  def post_params
    params.require(:post).permit(:url)
  end
end
