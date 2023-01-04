class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    skip_before_action :authorized, only: [:create, :index]

    def index
        users = User.all
        render json: users, include: ['clients', 'clients.events']
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    
    def show
        user = User.find(session[:user_id])
        if user
            render json: user, include: [ 'clients', 'clients.events']
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :phone_number, :email)
    end

    def record_invalid_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
