class Api::V1::EventsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        events = season.events

        render json: EventSerializer.new(events)
    end

    def create
        event = Event.create(event_params)
        team_params.each do |team_name| 
            organization = Organization.find_by(name: team_name)
            team = Team.find_by({organization: organization, season: event_params[:season_id]})
            TeamEvent.create({event: event, team: team})
        end
        render json: EventSerializer.new(event)
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def event_params
        params.require(:event).permit(:season_id, :datetime, :location, :name, :teams)
    end

    def team_params
        params.require(:teams)
    end

end
