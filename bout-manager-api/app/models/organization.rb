class Organization < ApplicationRecord
    has_many :teams
    belongs_to :district
    enum org_type: [:school, :community_team]

end
