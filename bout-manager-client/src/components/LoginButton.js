import React, { Component } from "react"

class LoginButton extends Component {
	render() {
		return (
			<button
				className="button is-link"
				onClick={() => {
					this.props.showModal()
				}}>
				Register/Login
			</button>
		)
	}
}

export default LoginButton
