class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password)
        # :first_name, :last_name, :phone_number, :email
    end

    def record_invalid_response(user)
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    end

end
