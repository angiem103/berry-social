class VendorsController < ApplicationController
    def index
        user = User.find_by(id: session[:user_id])
        vendors = Vendor.all.select{|v| v.user_id == user.id}
        render json: vendors      
    end

    def show
        vendor = Vendor.find_by(id: params[:id])
        if vendor
            render json: vendor
        else
            render json: { error: "Vendor Not Found" }, status: :not_found
        end
    end

    def create
        vendor = Vendor.create(vendor_params)
        render json: vendor, status: :created
    end

    private

    def vendor_params
        params.permit(:user_id, :name ,:contact_person, :phone_number, :email, :desc_of_serv)
    end
end
