class PagesOperations::Home
  attr_accessor :post, :authentication, :scope

  def initialize(params)
    @post = Post.new
    @authentication = Authentication.new
    @params = params
  end

  def posts
    @scope = Post.includes(:votes)
                  .where(updated: true)
                  .order(created_at: :desc)
                  .page(@params[:page])

    @posts ||= @scope.map { |p| PostPresenter.new(p) }
  end

  def to_partial_path
    'pages/home'
  end
end
