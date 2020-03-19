class District < ApplicationRecord
    has_many :round_settings
    has_many :seasons
end
