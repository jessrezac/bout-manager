class Api::V1::TeamsController < ApplicationController
    before_action :doorkeeper_authorize!
    before_action :set_team, only: [:show, :destroy]

    def index
        user = current_user
        season = user.person.current_season
        teams = season.teams

        options = { include: [:organization, :season, :events]}
        
        render json: TeamSerializer.new(teams)
    end

    def show
        options = { include: [:organization, :season, :events]}
        render json: TeamSerializer.new(@team, options)
    end

    def create
        team = Team.create(team_params)

        options = { include: [:organization, :season]}
        render json: TeamSerializer.new(team)
    end

    def destroy
        @team.destroy
    end

    private

    def set_team
        @team = Team.find(params[:id])
    end

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def team_params
        params.require(:team).permit(:id, :organization_id, :season_id)
    end
end
