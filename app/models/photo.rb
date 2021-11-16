# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  views       :integer          default(0), not null
#  title       :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


class Photo < ApplicationRecord
  validates :author_id, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment
  
  has_many :favorites,
    foreign_key: :photo_id,
    class_name: :Favorite

  has_many :tags,
    foreign_key: :photo_id,
    class_name: :Tag


end
