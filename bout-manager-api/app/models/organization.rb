class Organization < ApplicationRecord
    has_many :teams
    enum type: [:school, :community_team]

end
