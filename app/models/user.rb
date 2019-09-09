class User < ApplicationRecord
  has_secure_password
  has_many :post

  validates :username, uniqueness: true, presence: true
end
