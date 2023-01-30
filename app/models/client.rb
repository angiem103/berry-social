class Client < ApplicationRecord
    validates :phone_number, length: {:minimum => 10}
    validates :name, :email, presence: true

    belongs_to :user
    has_many :events, dependent: :destroy


end
