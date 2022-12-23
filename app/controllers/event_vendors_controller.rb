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


    def show
        event_vendor = EventVendor.find_by(id: params[:id])
        if event_vendor
            render json: event_vendor
        else
            render json: { error: "No information found" }, status: :not_found
        end
    end

    def update
        event_vendor = EventVendor.find_by(id: params[:id])
        if event_vendor
            event_vendor.update(event_params)
            render json: event_vendor
        else
            render json: { error: "No information found" }, status: :not_found
        end
    end

    private

    def event_vendor_params
        params.permit(:event_id, :vendor_id, :total_cost)
    end
    
end
