class TeamPerson < ApplicationRecord
    belongs_to :team
    belongs_to :person

    enum role: [:sponsor, :poet, :judge, :admin]
end
