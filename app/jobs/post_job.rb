class PostJob < ApplicationJob
  queue_as :default

  def perform(params = {})
    # Do something later
  end
end
