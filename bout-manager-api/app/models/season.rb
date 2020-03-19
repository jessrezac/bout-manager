class Season < ApplicationRecord
    belongs_to :district
    has_many :events
    has_many :teams
end
