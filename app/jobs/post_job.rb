class PostJob < ApplicationJob
  queue_as :default

  def perform(post_id)
    post = Post.find(post_id)
    information = VideoInformation.new(post_id)

    if information.call
      options = {
        status: :success,
        post: PostsController.render(
          partial: 'posts/post', locals: { post:
            PostPresenter.new(post.reload)
          }
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
