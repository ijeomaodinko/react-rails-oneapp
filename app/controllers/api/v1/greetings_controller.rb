
class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.random_greeting

    respond_to do |format|
      format.html
      format.json { render json: @greeting }
    end
  end

end
