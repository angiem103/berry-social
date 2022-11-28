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

4.times do
    Client.create(name: Faker::Name.name, phone_number:Faker::Base.numerify('(###) ### ####'), email:Faker::Internet.email)
end

User.create( username:"angie103", password:"flatiron123", first_name:"Angie", last_name:"Maticorena", phone_number:Faker::Base.unique.numerify('(###) ### ####'), email:Faker::Internet.email )

Event.create( user_id: 1, client_id: 1, name:"Jackie's 30th Birthday", description: "All black 30th Birthday Party. Event theme is Funeral for her 20s", start_date: "2023-04-25 19:00:00", end_date: "2023-04-25 23:00:00", location: Faker::Address.unique.full_address, budget: 5000, current_cost: 3000 )
Event.create( user_id: 1, client_id: 2, name:"Jessica's and Eduardo's Babyshower", description: "Winnie The Pooh themed baby shower for a baby boy. Parents requestd green and beige decorations", start_date: "2023-05-01 15:00:00", end_date: "2023-05-01 19:00:00", location: Faker::Address.unique.full_address, budget: 2000, current_cost: 600 )
Event.create( user_id: 1, client_id: 3, name:"Pet Adoption Paw-ty", description: "Pet adoption event open to the public to raise awareness about the importance of adoption. Customer requested animal safe environment and pet friendly treats", start_date: "2023-3-31 12:00:00", end_date: "2023-03-31 16:00:00", location: Faker::Address.unique.full_address, budget: 1000, current_cost: 200 )
Event.create( user_id: 1, client_id: 4, name:"Eva's 1st Birthday", description: "Hello Kitty themed birthday party for 1 year old. Parents requested Hello Kitty costume entertainer", start_date: "2023-06-15 13:00:00", end_date: "2023-06-15 17:00:00", location: Faker::Address.unique.full_address, budget: 3000, current_cost: 500 )


puts "Seeding data"