class ActivitiesController < ApplicationController

    def index 
        render json: Activity.all.order(date: :desc)
    end

    # def user_activities
    #     @activities = current_user.activites
    #     render json: @activities
    # end

    def user_activities
        if params[:my_activities]
            @activities = current_user.enrollments.map(&:activity)
        else

        end
        render json: activities
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
    end


#if user is logged in they will be able to create an activity
    def create  
        activity = @current_user.activites.create!(activity_params)
        render json: activity, status: :created
    end
#When logged in, user can update any activity. Bang! is for errors 
    def update
        activity = Activity.find_by(id: params[:id])
        activity.update!(activity_params)
        render json: activity, status: :ok
    end

    private

    def activity_params
        params.permit(:title, :description, :location, :date, :time)
    end
end
