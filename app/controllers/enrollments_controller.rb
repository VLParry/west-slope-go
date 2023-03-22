class EnrollmentsController < ApplicationController
    before_action :authorized

    # def index 
    #     render json: Enrollment.all
    # end

    # def show
    #    find_enrollment
    # end

    def create 
        activity = Activity.find(params[:activity_id])
        user = User.find(params[:user_id])
        enrollment = Enrollment.create!(activity: activity, user: user, number_of_attendees: params[:number_of_attendees])
        render json: enrollment.activity, status: :created
    end

    def update
        enrollment = Enrollment.find(params[:id])
        if enrollment.user == @current_user
            enrollment.update(enrollment_params)
            render json: enrollment 
        else
            render json: { error: 'Not Authorized' }, status: :unauthorized
        end
    end

#below is not working using find_enrollment 
    def destroy
        enrollment = Enrollment.find(params[:id])
        if enrollment.user == @current_user
            enrollment.destroy
            head :no_content
        else
            render json: { error: 'Not Authorized' }, status: :unauthorized
        end 
    end

    private

    def enrollment_params
        params.permit(:user_id, :activity_id, :number_of_attendees)
    end

    def find_enrollment
        enrollment = Enrollment.find(params[:id])
    end 

end
