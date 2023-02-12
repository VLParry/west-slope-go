class EnrollmentsController < ApplicationController
    skip_before_action :authorized
#allow user to click on an activitiy to enroll in it 
    def create 
        enrollment = @current_user.enrollment.create!(enrollment_params)
        render json: enrollment, status: :created
    end

   
#allow only user logged in to delete their own enrollments 
    def destroy
        enrollment = Enrollment.find(params[:id])
        if session[:user_id] === enrollment[:user_id]
        enrollment.destroy
        head :no_content
    end

    private

    def enrollment_params
        params.permit(:user_id, :activity_id)
    end
end
