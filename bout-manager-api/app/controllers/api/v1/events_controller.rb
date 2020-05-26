class Api::V1::EventsController < ApplicationController
    before_action :doorkeeper_authorize!
    before_action :set_event, only: [:update, :destroy]

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        events = season.events

        options = {
            include: [:teams, :season]
        }

        render json: EventSerializer.new(events, options)
    end

    def create
        event = Event.create(event_params)
        team_params.each do |team_name| 
            organization = Organization.find_by(name: team_name)
            team = Team.find_by({organization: organization, season: event_params[:season_id]})
            TeamEvent.create({event: event, team: team})
        end

        options = {
            include: [:teams, :season]
        }

        render json: EventSerializer.new(event, options)
    end

    def update

        @event.update(event_params)

        if team_params
            team_events = TeamEvent.where(event_id: @event.id)
            team_events.each do |team_event|
                unless team_params.include?(team_event.team_id)
                    team_event.destroy
                end
            end
        end
        
        events = @event.season.events 
        options = {
            include: [:teams, :season]
        }

        render json: EventSerializer.new(events, options)
    end

    def destroy
        season = Season.find(@event.season_id)
        @event.destroy

        events = season.events

        options = {
            include: [:teams, :season]
        }

        render json: EventSerializer.new(events, options)
    end

    private

    def set_event
        @event = Event.find(params[:id])
    end

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

    def event_params
        params.require(:event).permit(:id, :season_id, :datetime, :location, :name, :team_events_attributes)
    end

    def team_params
        params.require(:teams)
    end

end