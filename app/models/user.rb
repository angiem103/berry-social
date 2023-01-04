class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: true, presence: true, length: { minimum: 6 }
    validates :first_name, :last_name, :phone_number, :email, presence: true

    has_many :clients

end
