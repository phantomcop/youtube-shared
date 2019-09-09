class VideoInformation
  VIDEO_ID_FORMAT = /\A.+v=(.+)\z/.freeze
  attr_reader :video, :error

  def initialize(post_id)
    @post = Post.find(post_id)
    @error = nil
  end

  def call
    begin
      @video = Yt::Video.new id: video_id
      @post.title = @video.title
      @post.description = @video.description
      @post.published_at = @video.published_at
      @post.updated = true
      @post.save!
    rescue StandardError => e
      # Todo push error to slack
      @error = e.message
      false
    end
  end

  private

  def video_id
    @post.url.match(VIDEO_ID_FORMAT).captures[0]
  end
end
