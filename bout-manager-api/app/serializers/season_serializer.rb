class SeasonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :year
  has_many :organizations
end
