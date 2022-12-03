class EventVendor < ApplicationRecord
    belongs_to :event
    belongs_to :vendor
end
