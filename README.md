# Berry Social

Berry Social is a full-stack one page application that I've created for event planners using React and Ruby on Rails. While this website focuses on even planning, this agenda-like app can be modified to be used by other business owners. 

## User Stories

* MVP: As a user, I am able to:
    - Sign up for an account
    - Login and & stay logged in
    - Logout
    - View all events with related vendors and budget
    - Create a new event
    - Edit an event
    - Delete an event
    - View and create vendors
    - Viewl and create clients

* Stretch: As a user, I am able to:
    - Edit vendors with events
    - Search for specific events, vendors, or clients
    - Add decoration sketches for events



## Models and Relationships
<img width="834" alt="Screen Shot 2023-01-08 at 7 05 05 PM" src="https://user-images.githubusercontent.com/91964904/213611562-ccaeb9b7-54f6-40bc-bb0a-a349c1b14701.png"/>

* A User has many Clients
* A Client has many Events
* An Event belongs to a Client and has many Vendors through EventVendors
* A Vendor belongs to a User and has many Events through EventVendors

## Commands
After forking/cloning the repo:
  - Run bundle install 
  - Run npm install --prefix client
  - Run npm start --prefix client
  - Run rails s

## Ports used

* React front-end: localhost:4000
* Ruby back-end: localhost:3000



## Contributing

Thank you for showing interest in my project! Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

[MIT](https://choosealicense.com/licenses/mit/)
