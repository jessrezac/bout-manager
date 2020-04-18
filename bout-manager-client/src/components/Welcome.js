import React, { Component } from 'react'
import ProfileForm from './ProfileForm.js'
import TeamPeopleForm from './TeamPeopleForm.js'

class Welcome extends Component {

    render() {
        return (
			<>
				<ProfileForm />
				<TeamPeopleForm />
			</>
		)
    }
}

export default Welcome