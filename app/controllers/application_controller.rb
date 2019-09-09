class ApplicationController < ActionController::Base
  include AuthenticationHelper

  private

  def authenticate_user!
    unless logged_in?
      store_location
      redirect_to root_path, flash: { error: 'Please login to continue' }
    end
  end

  def unauthenticate_user!
    return unless logged_in?

    redirect_to root_path, flash: { error: 'Your account is already logged in' }
  end
end
