class Api::V1::TeamsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        teams = season.teams
        
        render json: TeamSerializer.new(teams)
    end

    def create
        ## if team_params includes organization_id, look it up and create a team for the current season
        team = Team.create(team_params)

        # if !team.organization && team_params[:organization_attributes][:name] != ""
        #     organization = Organization.find_or_create_by(name: team_params[:organization_attributes][:name])
        #     organization.org_type = team_params[:organization_attributes][:org_type]
        #     organization.district = team.season.district
        #     organization.save
        #     team.organization = organization
        #     team.save
        # end

        render json: TeamSerializer.new(team)

        
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def team_params
        params.require(:team).permit(:organization_id, :season_id, :organization_attributes)
    end
end
