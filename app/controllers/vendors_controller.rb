class VendorsController < ApplicationController
    def index
        user = User.find_by(id: session[:user_id])
        vendors = Vendor.all.select{|v| v.user_id == user.id}
        render json: vendors      
    end
end
