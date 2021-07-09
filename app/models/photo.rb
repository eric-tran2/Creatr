class Photo < ApplicationRecord
  validates :author_id, presence: true

  has_one_attached :photo
end
