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
							value={this.props.email || this.state.email} />
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
							value={this.state.snapchat} />
					</div>
					<div className="control">
						<label htmlFor="instagram">Instagram</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Instagram"
							name="instagram"
							onChange={this.handleChange}
							value={this.state.instagram} />
					</div>
				</div>
			</form>
		)
    }
}

const mapStateToProps = state => {
    return {
		firstName: state.user.user.profile.first_name,
		email: state.user.user.profile.email
	}
}

export default connect(mapStateToProps)(ProfileForm)