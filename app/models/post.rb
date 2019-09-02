class Post < ApplicationRecord
  belongs_to :user

  validates :url, presence: true,
                  format: {
                    with: /\A(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\z/,
                    message: 'Invalid Url'
                  },
                  uniqueness: true
end
