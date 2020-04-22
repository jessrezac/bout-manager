class Api::V1::EventsController < ApplicationController
    before_action :doorkeeper_authorize!

    def index
        user = current_user
        season = Season.find(user.person.teams.last.season_id)
        events = season.events

        render json: events
    end

    private

    def current_user
        User.find(doorkeeper_token.resource_owner_id) if doorkeeper_token
    end

end
