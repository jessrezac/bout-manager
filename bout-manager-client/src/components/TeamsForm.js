import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchOrganizations } from "../actions/organizations"
import SeasonOptionList from "../containers/SeasonOptionList"
import { createTeam } from "../actions/team"

class TeamsForm extends Component {
	state = {
		orgId: "",
		seasonId: "",
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createTeam(this.state)
		this.setState({
			orgId: "",
			seasonId: "",
		})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	renderOrgDatalist = () => {
		return Object.keys(this.props.organizations).map((orgId) => {
			return (
				<option value={orgId} key={orgId}>
					{this.props.organizations[orgId].attributes.name}
				</option>
			)
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2 className="subtitle">Add from Existing Organization</h2>
				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="orgId" className="label">
							Select Organization
						</label>
						<div className="select">
							<select
								name="orgId"
								id="orgId"
								onChange={this.handleChange}>
								{this.renderOrgDatalist()}
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

	componentDidMount() {
		this.props.fetchOrganizations()
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		organizations: state.entities.organization,
	}
}
export default connect(mapStateToProps, { fetchOrganizations, createTeam })(
	TeamsForm
)
