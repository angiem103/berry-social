class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :client_id, :name, :description, :start_date, :end_date, :location, :budget, :current_cost
end
