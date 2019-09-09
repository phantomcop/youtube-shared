class PostJob < ApplicationJob
  queue_as :default

  def perform(post_id)
    post = Post.find(post_id)
    information = VideoInformation.new(post_id).call
    if information
      options = {
        status: :success,
        post: PostsController.render(
          partial: 'posts/post', locals: { post: post.reload }
        )
      }
    else
      options = {
        status: :failed,
        message: information.error
      }
    end

    ActionCable.server.broadcast(
      'post_channel',
      options
    )
  end
end
