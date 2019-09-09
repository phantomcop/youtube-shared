class PostPresenter < ApplicationPresenter
  MAXIMUM_DESCRIPTION_LENGTH = 300.freeze

  def truncated_description
    if description.length > MAXIMUM_DESCRIPTION_LENGTH
      description.truncate(MAXIMUM_DESCRIPTION_LENGTH, separator: '') + '...'
    else
      description
    end
  end

  def embed_url
    url.gsub('watch?v=', 'embed/')
  end

  def parsed_published_at
    published_at.strftime("%H:%M %F")
  end

  def voted_type(user)
    voted_by?(user) && votes.find_by(user_id: user.id).kind
  end
end
