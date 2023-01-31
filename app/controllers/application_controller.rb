class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorized
  #before action runs authorized method  before any action runs
  #authorized method checks our sessions and if our users ID is in the session they are authorized, if not theyll get the error. Unless is like an if.
  private

  def authorized
    @current_user = User.find_by(id: session[:user_id])
    
     render json:{error: "Not Authorized"}, status: :unauthorized unless @current_user
  end
  
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity 
   end

end
