class EventsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        events = Event.all.select{|e| e.user_id == user.id}
        render json: events, include: :vendors
    end

    def update
        user = User.find_by(id: session[:user_id])
        event = Event.find_by(id: params[:id]).select{|e| e.user_id == user.id}

        
    end


    private

    def event_params

    end
end
