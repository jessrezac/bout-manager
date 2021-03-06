class EventSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower

  attributes :datetime, :location, :name, :teams

  belongs_to :season
  has_many :teams, serializer: TeamSerializer

end
