class TeamPersonController < ApplicationController
    before_action :doorkeeper_authorize!

    def create
        TeamPerson.create(team_person_params)
    end

    private

    def team_person_params
        params.require(:team_id, :person_id).permit(:id, :role)
    end
end
