import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileForm extends Component {
    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phone: this.props.phone,
        email: this.props.email,
        snapchat: this.props.snapchat,
        instagram: this.props.instagram
    }

    handleChange = e => {
        this.setState(
            {[e.target.name]: e.target.value}
        )
	}
	
	handleSubmit = e => {
		e.preventDefault()
		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Authorization": "Bearer " + this.props.access_token
			},
			body: JSON.stringify({ api_v1_person: {
				first_name: this.state.firstName,
				last_name: this.state.lastName,
				email: this.state.email,
				phone: this.state.phone,
				snapchat: this.state.snapchat,
				instagram: this.state.instagram
			} })
		}
		fetch(
			`http://localhost:3000/api/v1/people/${this.props.id}`,
			configObj
		)
			.then(resp => resp.json())
			.then(data => {
				console.log(data)
				/* todo */
			})
		this.setState({
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			phone: this.props.phone,
			email: this.props.email,
			snapchat: this.props.snapchat,
			instagram: this.props.instagram
		})
	}

    render() {
        return (
			<form onSubmit={this.handleSubmit}>
				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="First Name"
							name="firstName"
							onChange={this.handleChange}
							value={this.state.firstName}
						/>
					</div>
					<div className="control">
						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Last Name"
							name="lastName"
							onChange={this.handleChange}
							value={this.state.lastName}
						/>
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="phone">Phone</label>
						<input
							type="phone"
							className="input is-primary"
							placeholder="Phone"
							name="phone"
							onChange={this.handleChange}
							value={this.state.phone}
						/>
					</div>
					<div className="control">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="input is-primary"
							placeholder="Email"
							name="email"
							onChange={this.handleChange}
							value={this.props.email || this.state.email}
						/>
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="snapchat">Snapchat</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Snapchat"
							name="snapchat"
							onChange={this.handleChange}
							value={this.state.snapchat}
						/>
					</div>
					<div className="control">
						<label htmlFor="instagram">Instagram</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Instagram"
							name="instagram"
							onChange={this.handleChange}
							value={this.state.instagram}
						/>
					</div>
				</div>
				<div className="control">
					<button type="submit" className="button is-primary">
						Submit
					</button>
				</div>
			</form>
		)
    }
}

const mapStateToProps = state => {
    return {
		access_token: state.user.user.access_token,
		firstName: state.user.user.profile.first_name,
		email: state.user.user.profile.email,
		id: state.user.user.profile.id
	}
}

export default connect(mapStateToProps)(ProfileForm)