import React, { Component } from "react"
import { connect } from "react-redux"
import SeasonOptionList from "../containers/SeasonOptionList"
import { createOrganizationWithTeam } from "../actions/organizations"

class OrganizationsForm extends Component {
	state = {
		orgName: "",
		orgType: "school",
		seasonId: "",
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createOrganizationWithTeam(this.state)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2 className="subtitle">Add from New Organization</h2>

				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="orgName" className="label">
							Organization Name
						</label>
						<input
							type="text"
							className="input is-primary"
							placeholder="Organization Name"
							name="orgName"
							id="orgName"
							onChange={this.handleChange}
							value={this.state.orgName}
						/>
					</div>
					<div className="control">
						<label htmlFor="orgType" className="label">
							Organization Type
						</label>
						<div className="select">
							<select
								className="is-primary"
								name="orgType"
								onChange={this.handleChange}
								value={this.state.orgType}>
								<option value="school">School</option>
								<option value="community">Community</option>
							</select>
						</div>
					</div>
					<div className="control">
						<label htmlFor="seasonId" className="label">
							Select Season
						</label>
						<SeasonOptionList
							seasons={this.props.seasons}
							handleChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="field">
					<div className="control">
						<button className="button is-primary">Submit</button>
					</div>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		organizations: state.entities.organization,
	}
}
export default connect(mapStateToProps, { createOrganizationWithTeam })(
	OrganizationsForm
)
