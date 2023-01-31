class ActivitiesController < ApplicationController

    def index 
        render json: Activity.all
    end
#if user is logged in they will be able to create an activity
    def create  
        activity = @current_user.activites.create!(activity_params)
        render json: activity, status: :created
    end

    private

    def activity_params
        params.permit(:title, :description, :date, :time)
    end
end
