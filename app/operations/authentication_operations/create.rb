class AuthenticateOperations::Create
  attr_reader :error, :error

  def initialize(params)
    @params = params
    @error = ''
    @user = User.find_by_username(params[:username])
  end

  def call
    begin
      sign_up_or_login
    rescue => exception
      @error = exception.message
      false
    end
  end

  private

  def sign_up_or_login!
    @user.present? ? login : sign_up
  end

  def login
    unless @user.authenticate(params[:password])
      raise 'Invalid username or password'
    end
  end

  def sign_up
    @user = User.new(params)
    @user.password_confirmation = params[:password]
    @user.save!
end
