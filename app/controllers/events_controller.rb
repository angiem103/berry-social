class EventsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        events = Event.all.select{|e| e.user_id == user.id}
        if events
          render json: events
        else
            render json: {error: "No Events"}, status: :not_found
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        event = user.events.find_by(id: params[:id])
        if event
            render json: event
        else
            render json: { error: "Event Not Found" }, status: :not_found
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        event = user.events.find_by(id: params[:id])
        if event
            event.update(event_params)
            render json: event
        else
            render json: { error: "Event Not Found" }, status: :not_found
        end
    end

    def create
        event = Event.create(event_params)
            event.vendor_details.each do |vendor_attribs|
                event.event_vendors.create(vendor_attribs)
            end
        render json: event, status: :created
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        event = user.events.find_by(id: params[:id])
        if event
            event.destroy
            head :no_content
        else
            render json: {error: "Event Not Found"}, status: :not_found
        end
    end


    private

    def event_params
        params.permit(:user_id, :name,:description, :location, :budget, :current_cost, :start_date, :end_date, :end_time, :start_time, :client_id, vendor_details: [:vendor_id, :total_cost] )
    end

end
