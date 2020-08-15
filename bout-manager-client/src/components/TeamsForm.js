import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchOrganizations } from "../actions/organizations"
import SeasonOptionList from "../containers/SeasonOptionList"
import { createTeam } from "../actions/team"

class TeamsForm extends Component {
	state = {
		selectedOrgName: "",
		selectedSeasonId: "",
	}

	handleSubmit = (event) => {
		event.preventDefault()

		let organization = Object.keys(this.props.organizations).find(
			(orgId) => {
				return (
					this.props.organizations[orgId].attributes.name ===
					this.state.selectedOrgName
				)
			}
		)

		this.props.createTeam({
			selectedSeasonId: this.state.selectedSeasonId,
			selectedOrgId: organization,
		})

		this.setState({
			selectedOrgName: "",
			selectedSeasonId: "",
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
				<option
					value={this.props.organizations[orgId].attributes.name}
					key={orgId}
				/>
			)
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2 className="subtitle">Add from Existing Organization</h2>
				<div className="field is-grouped">
					<div className="control is-expanded">
						<label htmlFor="orgId" className="label">
							Select Organization
						</label>
						<div className="is-fullwidth">
							<input
								name="selectedOrgName"
								id="selectedOrgName"
								className="input is-primary"
								onChange={this.handleChange}
								value={this.state.selectedOrgId}
								list="organizations"
							/>
							<datalist id="organizations">
								{this.renderOrgDatalist()}
							</datalist>
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

	componentDidMount() {
		this.props.fetchOrganizations()
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.accessToken,
		organizations: state.entities.organization,
	}
}
export default connect(mapStateToProps, { fetchOrganizations, createTeam })(
	TeamsForm
)
