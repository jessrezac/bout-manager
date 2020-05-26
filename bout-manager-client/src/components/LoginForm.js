import React, { Component } from "react"
import { connect } from "react-redux"
import {
	setLoginPending,
	setLoginSuccess,
	setLoginError,
	logout,
} from "./../actions/user"
import { withRouter } from "react-router-dom"

class LoginForm extends Component {
	state = {
		email: "",
		password: "",
		rememberMe: false,
	}

	handleInputChange = (e) => {
		const input = e.target
		const value = input.type === "checkbox" ? input.checked : input.value

		this.setState({
			[input.name]: value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.setLoginPending()
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(
				Object.assign({}, this.state, { grant_type: "password" })
			),
		}
		fetch("http://localhost:3000/oauth/token", configObj)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.error) {
					this.props.setLoginError(
						"Email address or password are incorrect."
					)
				} else {
					this.props.setLoginError("")
					this.props.setLoginSuccess(data)
					// localStorage.setItem("rememberMe", this.state.rememberMe)
					// if (this.state.rememberMe) {
					//     localStorage.setItem(
					//         "access_token",
					//         data.access_token
					//     )
					//     localStorage.setItem("created_at", data.created_at)
					//     localStorage.setItem("expires_in", data.expires_in)
					//     localStorage.setItem("refresh_token", data.refresh_token)
					//     localStorage.setItem("token_type", data.token_type)
					//     localStorage.setItem("user_id", data.user_id)
					// }
					// console.log(data)
					this.props.hideModal()
					// data.profile_complete ? this.props.history.push("/dashboard") : this.props.history.push("/welcome")
					this.props.history.push("/events")
				}
			})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p className="content has-text-warning">
					{this.props.loginError}
				</p>
				<div className="field">
					<label htmlFor="email">Email Address</label>
					<div className="control">
						<input
							onChange={this.handleInputChange}
							className="input is-primary"
							type="email"
							placeholder="Email address"
							name="email"
							value={this.state.email}
						/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<label htmlFor="password">Password</label>
						<input
							onChange={this.handleInputChange}
							className="input is-primary"
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
						/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<label htmlFor="rememberMe">
							<input
								type="checkbox"
								className="checkbox"
								name="rememberMe"
								checked={this.state.rememberMe}
								onChange={this.handleInputChange}
							/>
							Remember Me
						</label>
					</div>
				</div>
				<div className="control">
					<button type="submit" className="button is-primary">
						Login
					</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoginPending: state.user.isLoginPending,
		isLoginSuccess: state.user.isLoginSuccess,
		loginError: state.user.loginError,
		user: state.user.user,
	}
}

export default connect(mapStateToProps, {
	setLoginPending,
	setLoginSuccess,
	setLoginError,
	logout,
})(withRouter(LoginForm))
