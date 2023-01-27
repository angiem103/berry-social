class Client < ApplicationRecord

    validates :name, :phone_number, :email, presence: true

    belongs_to :user
    has_many :events, dependent: :destroy


end
