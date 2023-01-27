class Event < ApplicationRecord
    validates :name, :description, :location, :budget, :start_date, :start_time, :end_date, :end_time, presence: true

    belongs_to :client
    belongs_to :user
    has_many :event_vendors
    has_many :vendors, through: :event_vendors
end
