class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events, include: :client
    end

end
