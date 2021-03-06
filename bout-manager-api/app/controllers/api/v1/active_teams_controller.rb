class Api::V1::ActiveTeamsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        district = District.find(active_teams_params)
        teams = district.active_teams
        render json: TeamSerializer.new(teams).serialized_json
    end

    private

    def active_teams_params
        params.require(:district_id)
    end
end
