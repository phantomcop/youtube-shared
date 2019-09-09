class PagesOperations::Home
  attr_accessor :post, :authentication

  def initialize
    @post = Post.new
    @authentication = Authentication.new
  end

  def posts
    @posts ||= Post.where(updated: true).map { |p| PostPresenter.new(p) }
  end

  def to_partial_path
    'pages/home'
  end
end
