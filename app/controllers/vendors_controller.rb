class VendorsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        user = User.find(session[:user_id])
        vendors = user.vendors
        render json: vendors      
    end

    def show
        user = User.find_by(id: session[:user_id])
        vendor = user.vendors.find_by(id: params[:id])
        if vendor
            render json: vendor
        else
            render json: { error: "Vendor Not Found" }, status: :not_found
        end
    end

    def create
        vendor = Vendor.create!(vendor_params)
        render json: vendor, status: :created
    end


    def destroy
        user = User.find_by(id: session[:user_id])
        vendor = user.vendors.find_by(id: params[:id])
        if vendor
            vendor.destroy
            head :no_content
        else
            render json: {error: "Vendor Not Found"}, status: :not_found
        end
    end

    private

    def vendor_params
        params.permit(:user_id, :name ,:contact_person, :phone_number, :email, :desc_of_serv)
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
