class Poem < ApplicationRecord
    has_and_belongs_to_many :people
    has_many :scores
    belongs_to :team
end
