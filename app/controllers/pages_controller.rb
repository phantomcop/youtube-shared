class PagesController < ApplicationController
  def home
    @home = PagesOperations::Home.new(params)
  end
end
