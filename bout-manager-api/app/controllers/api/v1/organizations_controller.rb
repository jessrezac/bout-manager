class Api::V1::OrganizationsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        person = current_user.person
        district = person.teams.last.season.district
        organizations = district.organizations
        render json: OrganizationSerializer.new(organizations)
    end

    def create
        person = current_user.person
        district = person.teams.last.season.district
        organization = Organization.new(organization_params)
        organization.district = district
        organization.save

        options = {
            include: [:teams]
        }

        render json: OrganizationSerializer.new(organization, options)
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def organization_params
        params.require(:organization).permit(:district_id, :name, :org_type, teams_attributes: [:season_id])
    end

end
