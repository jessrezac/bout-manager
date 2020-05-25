class TeamSerializer
  include FastJsonapi::ObjectSerializer

  attributes :season, :organization, :total_rank, :total_score, :total_score_difference

  set_key_transform :camel_lower

  belongs_to :season
  belongs_to :organization

  attribute :team_name do |team|
    "#{team.organization.name}"
  end



end
