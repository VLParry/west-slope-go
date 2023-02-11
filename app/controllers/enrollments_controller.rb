class EnrollmentsController < ApplicationController

    def create 
        enrollment = Enrollment.create!(enrollment_params)
        render json: enrollment.activity, status: :created
    end

    private

    def enrollment_params
        params.permit(:user_id, :activity_id)
    end
end
