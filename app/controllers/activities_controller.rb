class ActivitiesController < ApplicationController
    skip_before_action :authorized

    ##why can I not create an activity when my skip before action is enabled 

    def index 
        render json: Activity.all.order(date: :desc)
    end

    def show 
        activity = find_activity
        render json: activity, status: 200 
    end

    #if user is logged in they will be able to create an activity
    def create  
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

#When logged in, user can update any activity. Bang! is for errors 
def update
    activity = find_activity
    activity.update!(activity_params)
    render json: activity, status: :ok
end

    def destroy
        activity = find_activity
        activity.destroy
    end


    private

    def activity_params
        params.permit(:title, :description, :location, :date, :time, :activity)
    end

    def find_activity
        activity = Activity.find(params[:id])
    end
end
