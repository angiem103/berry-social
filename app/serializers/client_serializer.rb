class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :email

  belongs_to :user
  has_many :events
  
end
