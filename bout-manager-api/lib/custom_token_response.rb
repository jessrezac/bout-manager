module CustomTokenResponse
    def body
        user = User.find(@token.resource_owner_id)
        person = Person.find_or_create_by(user_id: @token.resource_owner_id)
        team_person = TeamPerson.find_by(team_id: person.active_team.id, person_id: person.id)
        profile_complete = person.first_name ? true : false
        additional_data = {
            'user' => user.to_json,
            'person' => person.to_json,
            'team_person' => team_person.to_json,
            'profile_complete' => !!person.first_name
        }

        # call original `#body` method and merge its result with the additional data hash
        super.merge(additional_data)
    end 
end