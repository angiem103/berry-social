class ClientsController < ApplicationController

    def index
        user = User.find(session[:user_id])
        clients = user.clients
        render json: clients
    end

    def show
        user = User.find(session[:user_id])
        clients = user.clients
        client = clients.find(params[:id])
        if client
            render json: client
        else
            render json: { error: "Client Not Found" }, status: :not_found
        end
    end

    def create
        client = Client.create(client_params)
        render json: client, status: :created
    end


    def destroy
        user = User.find(session[:user_id])
        clients = user.clients
        client = clients.find(params[:id])
            client.destroy
            head :no_content
    end

    private


    def client_params
        params.permit(:user_id, :name, :phone_number, :email)
    end

end
