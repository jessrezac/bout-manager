class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  set_key_transform :camel_lower

  attributes :datetime, :location, :season, :name

  belongs_to :season

end
