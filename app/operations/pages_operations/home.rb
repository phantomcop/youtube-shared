class PagesOperations::Home
  attr_accessor :post, :authentication, :scope

  def initialize(params)
    @post = Post.new
    @authentication = Authentication.new
    @scope = Post.includes(votes: :user)
                .where(updated: true)
                .order(created_at: :desc)
                .page(params[:page])
  end

  def posts
    @posts ||= @scope.map { |p| PostPresenter.new(p) }
  end

  def to_partial_path
    'pages/home'
  end
end
