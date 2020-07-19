class Person < ApplicationRecord
    has_many :team_people
    has_many :teams, through: :team_people
    has_and_belongs_to_many :poems
    has_many :scores
    belongs_to :user

    def active_team
        self.teams.where(is_active: true).first
    end

    def current_season
        self.active_team.season
    end
end
