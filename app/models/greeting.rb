# frozen_string_literal: true

class Greeting < ApplicationRecord
  def self.random_greeting
    offset = rand(Greeting.count)
    Greeting.offset(offset).first
  end
end
