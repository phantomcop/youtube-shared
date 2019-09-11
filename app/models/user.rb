class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy

  validates :username, uniqueness: true, presence: true
end
