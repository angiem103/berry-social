class EventsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        events = Event.all.select{|e| e.user_id == user.id}
        render json: events      
    end

end
