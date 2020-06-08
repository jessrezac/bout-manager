import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchOrganizations } from "../actions/organizations"

class TeamsForm extends Component {
	state = {
		orgName: "",
	}
	handleSubmit = () => {
		// TODO: Handle submit
	}

	renderOrgDatalist = () => {
		console.log("hi")
		return Object.keys(this.props.organizations).map((orgId) => {
			return (
				<option value={orgId}>
					{this.props.organizations[orgId].attributes.name}
				</option>
			)
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="field is-grouped">
					<div className="control">
						<label htmlFor="orgId" className="label">
							Select an Organization
						</label>
						<div className="select">
							<select name="orgId" id="orgId">
								{this.renderOrgDatalist}
							</select>
						</div>
						<input
							type="text"
							className="input is-primary"
							placeholder="Organization Name"
							name="orgName"
							id="orgName"
							onChange={this.handleChange}
							value={this.props.orgName}
							datalist="organizations"
						/>
						<datalist name="organizations">
							{this.renderOrgDatalist}
						</datalist>
					</div>
					<div className="control">
						<label htmlFor="orgType" className="label">
							Organization Type
						</label>
						<div className="select">
							<select
								className="is-primary"
								name="orgType"
								onChange={this.props.handleChange}
								value={this.props.orgType}>
								<option value="school">School</option>
								<option value="community">Community</option>
							</select>
						</div>
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
export default connect(mapStateToProps, { fetchOrganizations })(TeamsForm)
