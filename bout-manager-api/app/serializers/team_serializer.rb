class TeamSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower

  belongs_to :season
  belongs_to :organization

  attributes :season, :organization, :total_rank, :total_score, :total_score_difference

end
