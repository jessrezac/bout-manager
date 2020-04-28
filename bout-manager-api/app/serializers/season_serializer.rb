class SeasonSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :year
  has_many :teams
end
