class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :budget, :current_cost, :start_date, :start_time, :end_date, :end_time

  belongs_to :client
end
