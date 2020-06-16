import React, { Component } from "react"

class LogoutButton extends Component {
	render() {
		return (
			<button
				className="button is-link"
				onClick={() => {
					this.props.logout()
				}}>
				Logout
			</button>
		)
	}
}

export default LogoutButton
