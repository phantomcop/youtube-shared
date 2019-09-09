class PagesController < ApplicationController
  def home
    @home = PagesOperations::Home.new
  end
end
