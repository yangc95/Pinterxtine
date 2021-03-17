class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(
			params[:user][:username], 
			params[:user][:password])
		if @user.nil?
			render json: ['Wrong credentials'], status: 401
		else
			login!(@user)
			render 'api/users/show';
		end
	end

	def destroy
		@user = current_user;
		if @user
			logout!
			render "api/users/show"
		else
			render json: ['Uh oh... you need to sign in'], status: 404
		end
	end
end
