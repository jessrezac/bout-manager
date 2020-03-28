module CustomTokenResponse
    def body
        user = User.find(@token.resource_owner_id)
        person = Person.find_or_create_by(user_id: @token.resource_owner_id)
        
        additional_data = {
            'user_id' => @token.resource_owner_id,
            'profile' => {
                'first_name' => person.first_name,
                'last_name' => person.last_name,
                'phone' => person.phone,
                'email' => user.email,
                'snapchat' => person.snapchat,
                'instagram' => person.instagram
                'id' => person.id
            }
        }

        # call original `#body` method and merge its result with the additional data hash
        super.merge(additional_data)
    end
end