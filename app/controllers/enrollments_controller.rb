class EnrollmentsController < ApplicationController
    skip_before_action :authorized

    def index 
        render json: Enrollment.all
    end

    def show
       find_enrollment
    end

    def create 
        activity = Activity.find(params[:activity_id])
        user = User.find(params[:user_id])
        enrollment = Enrollment.create!(activity: activity, user: user, number_of_attendees: params[:number_of_attendees])
        render json: enrollment.activity, status: :created
    end

    def update
        enrollment = Enrollment.find(params[:id])
        enrollment.update(enrollment_params)
        render json: enrollment 
    end

#below is not working using find_enrollment 
    def destroy
        enrollment = Enrollment.find(params[:id])
        enrollment.destroy
        head :no_content
    end

    private

    def enrollment_params
        params.permit(:user_id, :activity_id, :number_of_attendees)
    end

    def find_enrollment
        enrollment = Enrollment.find(params[:id])
    end 
end
