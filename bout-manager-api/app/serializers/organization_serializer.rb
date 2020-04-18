class OrganizationSerializer
  include FastJsonapi::ObjectSerializer

  set_key_transform :camel_lower

  attributes :name, :org_type

  has_many :teams
end
