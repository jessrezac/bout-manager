class District < ApplicationRecord
    has_many :round_settings
    has_many :seasons

    def active_teams
        sorted_seasons = self.seasons.sort { |left, right| right.year <=> left.year }
        current_season = sorted_seasons[0]
        current_season.teams
    end

end

