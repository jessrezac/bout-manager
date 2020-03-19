class Round < ApplicationRecord
    belongs_to :event
    has_many :poems
end
