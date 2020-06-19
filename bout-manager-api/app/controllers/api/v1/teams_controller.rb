class Api::V1::TeamsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        teams = season.teams
        
        render json: TeamSerializer.new(teams)
    end

    def create
        team = Team.create(team_params)

        options = { include: [:organization, :season]}
        render json: TeamSerializer.new(team)
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def team_params
        params.require(:team).permit(:organization_id, :season_id)
    end
end
