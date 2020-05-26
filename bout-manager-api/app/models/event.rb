class Event < ApplicationRecord
    has_many :team_events
    has_many :teams, through: :team_events
    belongs_to :season
    has_many :rounds

    accepts_nested_attributes_for :team_events

end
