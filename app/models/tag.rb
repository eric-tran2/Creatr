# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tagger_id  :integer
#
class Tag < ApplicationRecord
  validates :photo_id, :name, presence: true

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo

  belongs_to :tagger,
    foreign_key: :tagger_id,
    class_name: :User
end
