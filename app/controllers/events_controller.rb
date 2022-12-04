class EventsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        events = Event.all.select{|e| e.user_id == user.id}
        render json: events, include: :vendors
    end

    def show
        event = Event.find_by(id: params[:id])
        if event
            render json: event
        else
            render json: { error: "Event Not Found" }, status: :not_found
        end
    end

    def update
        event = Event.find_by(id: params[:id])
        if event
            event.update(event_params)
            render json: event
        else
            render json: { error: "Event Not Found" }, status: :not_found
        end
    end



    private

    def event_params
        params.permit(:name,:description, :location, :budget, :current_cost, :start_date, :end_date, :end_time, :start_time)
    end

end
