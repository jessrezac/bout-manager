class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :person
  belongs_to :person
end
