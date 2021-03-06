# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  about      :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pin < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user
    has_one_attached :photo
    has_many :pin_boards,
        primary_key: :id,
        foreign_key: :pin_id,
        class_name: :PinBoard
    has_many :boards,
        through: :pin_boards,
        source: :board
end