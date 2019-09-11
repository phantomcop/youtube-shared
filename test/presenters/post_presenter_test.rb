require 'test_helper'

class PostPresenterTest < ActiveSupport::TestCase
  test 'Can return embed link' do
    post = posts(:one)
    post_presenter = PostPresenter.new(post)

    assert_equal post_presenter.embed_url, post.url.gsub('watch?v=', 'embed/')
  end

  test 'Can return correct parsed published at' do
    post = posts(:one)
    post_presenter = PostPresenter.new(post)

    assert_equal(
      post_presenter.parsed_published_at,
      post.published_at.strftime("%H:%M %F")
    )
  end

  test 'Can return truncated when description length more than 300 characters' do
    post = posts(:more_than_300_chars)
    post_presenter = PostPresenter.new(post)

    assert_equal(
      post_presenter.truncated_description,
      post.description
          .truncate(PostPresenter::MAXIMUM_DESCRIPTION_LENGTH, separator: '') + '...'
    )
  end
end
