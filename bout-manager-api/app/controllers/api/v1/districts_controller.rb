class Api::V1::DistrictsController < ApplicationController
    before_action :doorkeeper_authorize!
    def index
        districts = District.all
        render json: districts
    end

end