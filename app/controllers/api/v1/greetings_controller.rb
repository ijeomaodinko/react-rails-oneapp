# frozen_string_literal: true

module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greeting = Greeting.random_greeting

        respond_to do |format|
          format.html
          format.json { render json: @greeting }
        end
      end
    end
  end
end
