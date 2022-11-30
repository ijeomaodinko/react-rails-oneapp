class GreetingsController < ApplicationController
  def index
      @greeting = Greeting.first(:order => "RANDOM()")
      
      respond_to do |format|
        format.html
        format.json { render json: @greeting }
      end
  end
end
