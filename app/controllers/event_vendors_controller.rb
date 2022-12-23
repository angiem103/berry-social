class EventVendorsController < ApplicationController

    def index
        event_vendors = EventVendor.all
        if event_vendors
        render json: event_vendors
        else
            render json: {error: "No Events"}, status: :not_found
        end
    end

    def create
        event_vendor = EventVendor.create(event_vendor_params)
        render json: event, status: :created
    end

    private

    def event_vendor_params
        params.permit(:event_id, :vendor_id, :total_cost)
    end
    
end
