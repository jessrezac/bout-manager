class Person < ApplicationRecord
    has_many :team_people
    has_many :teams, through: :team_people
    has_and_belongs_to_many :poems
    has_many :scores
end
