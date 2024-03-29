class EventSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :client_id, :name, :description, :start_date, :end_date, :location, :budget, :start_time, :end_time, :total

  belongs_to :client
  belongs_to :user
  has_many :vendors
  has_many :event_vendors

  def total
    self.object.event_vendors.sum {|h| h[:total_cost] }
  end
  

end
