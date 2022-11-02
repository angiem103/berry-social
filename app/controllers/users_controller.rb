class UsersController < ApplicationController
    wrap_parameters
rescue_from ActiveRecord:RecordInvalid, with: :record_invalid_response

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :phone_number, :email)
    end

    def record_invalid_response(user)
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    end

end
