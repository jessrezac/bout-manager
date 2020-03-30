import React, { Component } from 'react'
import ProfileForm from './ProfileForm.js'
import DistrictSelect from './DistrictSelect.js'

class Welcome extends Component {
    render() {
        return (
			<section className="section">
				<h1 className="title is-1">Complete Your Profile</h1>
				<ProfileForm />
				<DistrictSelect />
			</section>
		)
    }
}

export default Welcome