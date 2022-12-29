# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)


User.create( username:"angie103", password:"flatiron123", first_name:"Angie", last_name:"Maticorena", phone_number:Faker::Base.unique.numerify('(###) ### ####'), email:Faker::Internet.free_email(name: 'Angie') )
User.create( username:"ana123", password:"flatiron123", first_name:"Ana", last_name:"Kajie", phone_number:Faker::Base.unique.numerify('(###) ### ####'), email:Faker::Internet.free_email(name: 'Ana') )

Client.create(name: Faker::Name.name, phone_number:Faker::Base.numerify('(###) ### ####'), email:Faker::Internet.email, user_id: 1)
Client.create(name: Faker::Name.name, phone_number:Faker::Base.numerify('(###) ### ####'), email:Faker::Internet.email, user_id: 1)
Client.create(name: Faker::Name.name, phone_number:Faker::Base.numerify('(###) ### ####'), email:Faker::Internet.email, user_id: 2)
Client.create(name: Faker::Name.name, phone_number:Faker::Base.numerify('(###) ### ####'), email:Faker::Internet.email, user_id: 2)


Event.create( user_id: 1, client_id: 1, name:"Jackie's 30th Birthday", description: "All black 30th Birthday Party. Event theme is Funeral for her 20s", start_date: "2023-04-25",  start_time: "19:00:00",  end_date: "2023-04-25", end_time: "23:00:00", location: Faker::Address.unique.full_address, budget: 5000)
Event.create( user_id: 1, client_id: 2, name:"Jessica's and Eduardo's Babyshower", description: "Winnie The Pooh themed baby shower for a baby boy. Parents requested green and beige decorations", start_date: "2023-05-01", start_time: "15:00:00", end_date: "2023-05-01", end_time: "19:00:00", location: Faker::Address.unique.full_address, budget: 2000)
Event.create( user_id: 2, client_id: 3, name:"Pet Adoption Paw-ty", description: "Pet adoption event open to the public to raise awareness about the importance of adoption. Customer requested animal safe environment and pet friendly treats", start_date: "2023-3-31", start_time: "12:00:00", end_date: "2023-03-31", end_time: "16:00:00", location: Faker::Address.unique.full_address, budget: 1000)
Event.create( user_id: 2, client_id: 4, name:"Eva's 1st Birthday", description: "Hello Kitty themed birthday party for 1 year old. Parents requested Hello Kitty costume entertainer", start_date: "2023-06-15", start_time: "13:00:00", end_date:"2023-06-15", end_time:"1:00:00",location: Faker::Address.unique.full_address, budget: 3000)

Vendor.create( name: "Lucy's Flowers", contact_person: "Lucy Stanton", phone_number: Faker::Base.numerify('(###) ### ####'), email: Faker::Internet.free_email(name: 'Lucy'), desc_of_serv: "Wholesale flowers and arrangements for large events", user_id: 1 )
Vendor.create( name: "The Cuban", contact_person: "Juan Balleza", phone_number: Faker::Base.numerify('(###) ### ####'), email: Faker::Internet.free_email(name: 'Juan'), desc_of_serv: "Cuban inspired restaurant. Provides catering and bartending services", user_id: 1)
Vendor.create( name: "DJ Chuck", contact_person: "Chuck Wilde", phone_number: Faker::Base.numerify('(###) ### ####'), email: Faker::Internet.free_email(name: 'Chuck'), desc_of_serv: "DJ who specializes in dancehall and latin music", user_id: 1)
Vendor.create( name: "It's A Party", contact_person: "Ana Leon", phone_number: Faker::Base.numerify('(###) ### ####'), email: Faker::Internet.free_email(name: 'Ana'), desc_of_serv: "Decoration services for parties and weddings", user_id: 1)
Vendor.create( name: "Party Perfect", contact_person: "Lucia Salazar", phone_number: Faker::Base.numerify('(###) ### ####'), email: Faker::Internet.free_email(name: 'Lucia'), desc_of_serv: "Decoration services for parties and weddings", user_id: 2)

EventVendor.create( event_id: 1, vendor_id: 4, total_cost: 1500)
EventVendor.create( event_id: 1, vendor_id: 3, total_cost: 500)
EventVendor.create( event_id: 2, vendor_id: 2, total_cost: 1000)
EventVendor.create( event_id: 3, vendor_id: 4, total_cost: 600)
EventVendor.create( event_id: 4, vendor_id: 3, total_cost: 3000)


puts "Seeding data"