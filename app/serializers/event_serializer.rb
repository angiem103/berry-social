class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :client_id, :name, :description, :start_date, :end_date, :location, :budget, :current_cost, :start_time, :end_time

  belongs_to :client
  has_many :vendors

end
