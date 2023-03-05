class EnrollmentsController < ApplicationController
    skip_before_action :authorized

def index 
    render json: Enrollment.all
end

    
def show
    enrollment = Enrollment.find(params[:id])
end
#allow user to click on an activitiy to enroll in it 
    def create 
        # byebug
        activity = Activity.find(params[:activity_id])
        user = User.find(params[:user_id])
        enrollment = Enrollment.create!(activity: activity, user: user)
    
        if enrollment.save
          redirect_to activity_path(activity), notice: "You have successfully enrolled in the activity."
        else
          redirect_to activity_path(activity), alert: "Enrollment failed. Please try again."
        end
      
       
        # enrollment = @current_user.enrollment.create!(enrollment_params)
        # render json: enrollment.activity, status: :created
    end

   
#allow only user logged in to delete their own enrollments 
    def destroy
        enrollment = Enrollment.find(params[:id])
        # if session[:user_id] === enrollment[:user_id]
        enrollment.destroy
        head :no_content
    end

    

    private

    def enrollment_params
        params.permit(:user_id, :activity_id)
    end
end
