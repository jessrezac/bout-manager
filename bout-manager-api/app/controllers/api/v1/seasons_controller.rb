class Api::V1::SeasonsController < ApplicationController

    before_action :doorkeeper_authorize!    

    def index
        user = current_user
        district = user.person.teams.last.organization.district
        seasons = district.seasons

        render json: SeasonSerializer.new(seasons)

    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

end
