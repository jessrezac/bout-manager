import React, { Component } from "react"
import { connect } from "react-redux"
import { setRegistrationErrors, setLoginError } from "./../actions/user"

class RegisterForm extends Component {
	state = {
		email: "",
		password: "",
		password_confirmation: "",
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ api_v1_user: this.state }),
		}
		fetch("http://localhost:3000/api/v1/users", configObj)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.errors) {
					this.props.setRegistrationErrors(data.errors)
				} else {
					this.props.setRegistrationErrors({})
					this.props.setLoginError(
						"Thanks for registering! Please login."
					)
					this.props.toggleModal()
				}
			})
		this.setState({
			email: "",
			password: "",
			password_confirmation: "",
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
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
						<p className="content has-text-warning">
							{this.props.emailErrors}
						</p>
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
						<label htmlFor="password">Password Confirmation</label>
						<input
							onChange={this.handleInputChange}
							className="input is-primary"
							type="password"
							placeholder="Confirm password"
							name="password_confirmation"
							value={this.state.password_confirmation}
						/>
						<p className="content has-text-warning">
							{this.props.passwordErrors}
						</p>
					</div>
				</div>
				<div className="control">
					<button type="submit" className="button is-primary">
						Register
					</button>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		emailErrors:
			state.loggedInUser.registrationErrors.email &&
			"Email " + state.loggedInUser.registrationErrors["email"] + ".",
		passwordErrors:
			state.loggedInUser.registrationErrors["password"] &&
			"Password " +
				state.loggedInUser.registrationErrors["password"] +
				".",
	}
}

export default connect(mapStateToProps, {
	setRegistrationErrors,
	setLoginError,
})(RegisterForm)
