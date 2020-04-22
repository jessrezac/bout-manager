class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  set_key_transform :camel_lower

  attributes :datetime, :location, :season

  belongs_to :season

end
