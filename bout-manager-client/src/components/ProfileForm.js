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
						/>
					</div>
					<div className="control">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="input is-primary"
							placeholder="Email"
							name="email"
							onChange={this.handleChange}>
							{this.props.email}
						</input>
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
							onChange={this.handleChange}>
							{this.props.snapchat}
						</input>
					</div>
					<div className="control">
						<label htmlFor="instagram">Instagram</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Instagram"
							name="instagram"
							onChange={this.handleChange}>
							{this.props.instagram}
						</input>
					</div>
				</div>
			</form>
		)
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        phone: state.user.phone,
        email: state.user.email,
        snapchat: state.user.snapchat,
        instagram: state.user.instagram
    }
}

export default connect()(ProfileForm)