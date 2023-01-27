class Event < ApplicationRecord
    belongs_to :client
    belongs_to :user
    has_many :event_vendors
    has_many :vendors, through: :event_vendors
end
