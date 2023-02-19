class ActivitiesController < ApplicationController
    # skip_before_action :authorized

    def index 
        render json: Activity.all.order(date: :desc)
    end

    #if user is logged in they will be able to create an activity
    def create  
        # activity = Activity.create!(activity_params)
        activity = @current_user.activities.create!(activity_params)
        render json: activity, status: :created
    end



    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
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
