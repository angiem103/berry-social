class Vendor < ApplicationRecord
    validates :phone_number, length: {:minimum => 10}
    validates :name, :contact_person, :email, :desc_of_serv, presence: true

    belongs_to :user
    has_many :event_vendors
    has_many :events, through: :event_vendors
end
