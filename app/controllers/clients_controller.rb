class ClientsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        clients = Client.all.select{|c| c.user_id == user.id}
        render json: clients
    end

    def show
        client = Client.find_by(id: params[:id])
        if client
            render json: client
        else
            render json: { error: "Client Not Found" }, status: :not_found
        end
    end
end
