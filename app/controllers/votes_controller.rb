class VotesController < ApplicationController
  before_action :authenticate_user!

  def create
    operation = VoteOperations::Create.new(
      user: current_user,
      post_id: params[:post_id],
      vote_type: params[:vote_type]
    )

    if operation.call
      flash[:success] = "Vote success"
    else
      flash[:error] = operation.error
    end

    redirect_back_or(root_path)
  end
end
