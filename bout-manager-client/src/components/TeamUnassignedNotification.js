import React, { Component } from "react"
import { Link } from "react-router-dom"

class ProfileIncompleteNotification extends Component {
	render() {
		return (
			<div className="notification is-primary is-light is-size-4">
				You must be assigned to a team.{" "}
				<Link to="/settings/team" className="button is-light">
					Go
				</Link>
			</div>
		)
	}
}

export default ProfileIncompleteNotification
