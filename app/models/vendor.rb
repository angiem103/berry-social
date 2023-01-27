class Vendor < ApplicationRecord
    validates :phone_number, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10}
    validates :name, :contact_person, :email, :desc_of_serv, presence: true

    belongs_to :user
    has_many :event_vendors
    has_many :events, through: :event_vendors
end
