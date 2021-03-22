class Api::PinsController < ApplicationController
    helper_method :current_user

    def index
        @pins = Pin.all
        render :index
    end

    def create
        @pin = Pin.new(pin_params)

        if @pin.save
            render "api/pin/show"
        else
            render json: ["Pin error"]
        end
    end

    def show
        @pin = Pin.find(params[:id])
        render "api/users/show"
    end
    
    def update
        @pin = Pin.find(params[:id])
        if @pin && @pin.update(pin_params)
            render :show
        else
            render json: ["Pin not found"]
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        
        if @pin.destroy
            render "api/pins/show"
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :about, :user_id, :board_id);
    end


end
