class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact_person, :phone_number, :email, :desc_of_serv

  belongs_to :user
  has_many :events
  has_many :event_vendors

end
