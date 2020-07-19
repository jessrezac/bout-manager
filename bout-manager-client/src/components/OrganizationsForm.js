import React, { Component } from "react"
import { connect } from "react-redux"
import SeasonOptionList from "../containers/SeasonOptionList"
import { createOrganizationWithTeam } from "../actions/organizations"

class OrganizationsForm extends Component {
	state = {
		orgName: "",
		orgType: "",
		selectedSeasonId: "",
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createOrganizationWithTeam(this.state)
		this.setState({
			orgName: "",
			orgType: "",
			selectedSeasonId: "",
		})
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
					<div className="control is-expanded">
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
								<option value="" disabled>
									Select
								</option>
								<option value="school">School</option>
								<option value="community">Community</option>
							</select>
						</div>
					</div>
					<div className="control">
						<label htmlFor="selectedSeasonId" className="label">
							Select Season
						</label>
						<SeasonOptionList
							seasons={this.props.seasons}
							handleChange={this.handleChange}
							selectedSeasonId={this.state.selectedSeasonId}
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
		accessToken: state.loggedInUser.accessToken,
		organizations: state.entities.organization,
	}
}
export default connect(mapStateToProps, { createOrganizationWithTeam })(
	OrganizationsForm
)
