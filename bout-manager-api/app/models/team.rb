class Team < ApplicationRecord
    belongs_to :season
    belongs_to :organization
    has_many :team_people
    has_many :people, through: :team_people
    has_many :poems
end