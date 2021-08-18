# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  photo_id     :integer          not null
#  favoriter_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
  validates :favoriter_id, :photo_id, null: false

  belongs_to :favoriter,
    foreign_key: :favoriter_id,
    class_name: :User

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo

end
