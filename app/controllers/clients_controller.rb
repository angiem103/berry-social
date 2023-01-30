class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

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
        user = User.find_by(id: session[:user_id])
        client = user.client.create!(client_params)
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
        params.permit( :name, :phone_number, :email)
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
