class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def create 
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end 
    # def create 
    #     user = User.create!(user_params)
    #     session[:user_id] = user.id 
    #     render json: user, status: :created 
    # end

    #show is so we can stay logged in on the front end as  we continue to make requests and can refresh and still be in logged
    def show
        render json: @current_user
    end


    private

    def user_params
        params.permit(:email, :name, :password, :password_confirmation)
    end
end
