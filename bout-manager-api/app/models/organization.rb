class Organization < ApplicationRecord
    has_many :teams
    enum org_type: [:school, :community_team]

end
