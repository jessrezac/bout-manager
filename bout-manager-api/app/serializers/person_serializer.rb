class PersonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :phone, :email, :instagram, :snapchat, :judge, :active_team, :current_season

  set_key_transform :camel_lower

  has_many :team_people
  has_many :teams, through: :team_people

end
