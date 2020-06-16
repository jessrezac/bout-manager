class Api::V1::OrganizationsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        person = current_user.person
        district = person.teams.last.season.district
        organizations = district.organizations
        render json: OrganizationSerializer.new(organizations)
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

end
