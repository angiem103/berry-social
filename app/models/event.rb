class Event < ApplicationRecord
    belongs_to :client
    has_many :event_vendors
    has_many :vendors, through: :event_vendors
end
