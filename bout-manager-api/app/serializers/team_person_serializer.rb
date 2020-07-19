class TeamPersonSerializer
  include FastJsonapi::ObjectSerializer
  set_type :team_person 
  attributes :team, :person, :role

  attribute :team_name do |team_person|
    "#{team_person.team.organization.name}"
  end

  attribute :team_season do |team_person|
    "#{team_person.team.season.year}"
  end

  set_key_transform :camel_lower

  belongs_to :team, serializer: TeamSerializer
  belongs_to :person, serializer: PersonSerializer

    

end
