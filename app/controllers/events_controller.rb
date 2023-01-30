class EventsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        user = User.find_by(id: session[:user_id])
        events = user.events
        render json: events
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
            event.update!(event_params)
            render json: event
    end

    def create
        user = User.find(session[:user_id])
        event = user.events.create!(event_params)
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

    def render_not_found_response(invalid)
        render json: { errors: invalid.record.errors }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
