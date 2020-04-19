class Api::V1::TeamPeopleController < ApplicationController
    before_action :doorkeeper_authorize!

    def create
        team_person = TeamPerson.create(team_person_params)
        render json: team_person
    end

    private

    def team_person_params
        params.require(:api_v1_team_person).permit(:team_id, :person_id, :id, :role)
    end
end
