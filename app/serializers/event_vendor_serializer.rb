class EventVendorSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :vendor_id, :total_cost

  belongs_to :event
  belongs_to :vendor
end
