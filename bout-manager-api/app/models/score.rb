class Score < ApplicationRecord
    belongs_to :poem
    belongs_to :people
end
