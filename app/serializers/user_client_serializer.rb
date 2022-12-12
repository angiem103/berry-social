class UserClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email

  has_many :events
end
