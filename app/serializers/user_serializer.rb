class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email

  has_many :clients, serializer: UserClientSerializer
  has_many :events
  has_many :vendors

end

