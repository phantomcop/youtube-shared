class PostsController < ApplicationController
  def create
    redirect_to root_path, flash: PostsOperations::Create.new(params).call
  end

  def new
    @post = Post.new
  end
end
