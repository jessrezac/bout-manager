import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        snapchat: "",
        instagram: ""
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
				"Authorization": "Bearer " + this.props.accessToken
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
				this.setState({
					firstName: data.first_name || "",
					lastName: data.last_name || "",
					phone: data.phone || "",
					email: data.email || "",
					snapchat: data.snapchat || "",
					instagram: data.instagram || ""
				})
			})
	}

    render() {
        return (
			<section className="section">

				<div className="container">
					<h1 className="title is-1">Complete Your Profile</h1>
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
									value={this.state.email}
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
				</div>
			</section>
		)
	}
	
	componentDidMount() {
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken
			}
		}
		fetch(
			`http://localhost:3000/api/v1/people/${this.props.id}`,
			configObj
		)
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				firstName: data.first_name || "",
				lastName: data.last_name || "",
				phone: data.phone || "",
				email: data.email || "",
				snapchat: data.snapchat || "",
				instagram: data.instagram || ""
			})
		})
	}
}

const mapStateToProps = state => {
    return {
		accessToken: state.user.user.access_token,
		id: state.user.user.person_id
	}
}

export default connect(mapStateToProps)(ProfileForm)