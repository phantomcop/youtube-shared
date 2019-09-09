class AuthenticationsController < ApplicationController
  before_action :unauthenticate_user!, only: %i[create]
  before_action :authenticate_user!, only: %i[destroy]

  def create
    authentication = Authentication.new(authentication_params)
    if authentication.save
      log_in(authentication.user)
      flash[:success] = 'Login success'
    else
      flash[:error] = authentication.errors.full_messages.to_sentence
    end

    redirect_to root_path
  end

  def destroy
    log_out
    redirect_to root_path, notice: 'You are already logged out.'
  end

  private

  def authentication_params
    params.permit(:username, :password)
  end
end
