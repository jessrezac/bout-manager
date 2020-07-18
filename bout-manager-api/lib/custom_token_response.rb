module CustomTokenResponse
    def body
        user = User.find(@token.resource_owner_id)
        person = Person.find_or_create_by(user_id: @token.resource_owner_id)
        profile_complete = person.first_name ? true : false
        additional_data = {
            'user' => user.to_json,
            'person' => person.to_json,
            'team' => person.active_team.to_json,
            'profile_complete' => !!person.first_name
        }

        # call original `#body` method and merge its result with the additional data hash
        super.merge(additional_data)
    end 
end