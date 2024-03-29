class SessionsController < ApplicationController
   skip_before_action :authorized, only: :create
   #above prevents everything except create to go through auth, you need to be authorized(signed in) to log out and use other functionality 

    #authenticate is a special method from bcrypt 
    #authenticate below, the params we pass in have the password and the user knows about the digest hash, when you authenticate it compares the password they put in (encrypt) to whats in the digest. if user exists and authenticates, save in the session hash
    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            #& is handling a nil possibility
            #create a new session
            
            session[:user_id] = user.id 
            # byebug
            render json: user
        else
            render json: {errors: ["Invalid email or password"]}, status: :unauthorized
        end
    end
#log out
    def destroy
        session.delete :user_id
        head :no_content
    end

end