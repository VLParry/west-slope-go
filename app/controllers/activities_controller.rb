class ActivitiesController < ApplicationController
    skip_before_action :authorized


    def index 
        render json: Activity.all.order(date: :asc)
    end

    def show 
        activity = find_activity
        render json: activity, status: 200 
    end

    def create  
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

#When logged in, user can edit any activity. Keeping this for my stretch goal although it isn't particularly how i'd like it. Bang! is for errors 
    def update
        activity = find_activity
        activity.update!(activity_params)
        render json: activity, status: :ok
    end
#keeping this for my stretch goal 
    # def destroy
    #     activity = find_activity
    #     activity.destroy
    # end


    private

    def activity_params
        params.permit(:title, :description, :location, :date, :time, :activity)
    end

    def find_activity
        activity = Activity.find(params[:id])
    end
end
