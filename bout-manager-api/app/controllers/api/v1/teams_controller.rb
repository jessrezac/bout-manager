class Api::V1::TeamsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        teams = season.teams
        
        render json: TeamSerializer.new(teams)
    end


    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def event_params
        params.require(:event).permit(:season_id, :datetime, :location, :name)
    end
end
