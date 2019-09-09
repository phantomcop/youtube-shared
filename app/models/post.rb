class Post < ApplicationRecord
  YOUTUBE_URL_FORMAT = /\A(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\z/.freeze
  belongs_to :user
  has_many :votes
  has_many :posts

  after_commit :crawling_information, on: :create

  validates :url, presence: true,
                  format: {
                    with: YOUTUBE_URL_FORMAT,
                    message: 'Invalid Url'
                  },
                  uniqueness: true

  def voted_by?(user)
    votes.exists?(user_id: user.id)
  end

  private

  def crawling_information
    PostJob.perform_later(id)
  end
end
