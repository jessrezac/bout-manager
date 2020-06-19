class Organization < ApplicationRecord
    has_many :teams
    belongs_to :district
    enum org_type: [:school, :community]

    accepts_nested_attributes_for :teams

end
