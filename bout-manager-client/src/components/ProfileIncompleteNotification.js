import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileIncompleteNotification extends Component {

    render() {
        return (
			<div class="notification is-info is-size-4">
				You haven't completed your profile.{" "}
				<Link
					to="/settings/profile"
					className="button is-warning is-light">
					Go
				</Link>
			</div>
		)
    }

}

export default ProfileIncompleteNotification

