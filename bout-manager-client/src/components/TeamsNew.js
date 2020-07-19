import React, { Component } from "react"
import TeamsForm from "./TeamsForm"
import OrganizationsForm from "./OrganizationsForm"
import { connect } from "react-redux"

class TeamsNew extends Component {
	state = {
		seasons: [],
	}

	render() {
		return (
			<>
				<section className="section">
					<div className="container">
						<h1 className="title is-1">Add A Team</h1>
						<TeamsForm seasons={this.state.seasons} />
					</div>
				</section>
				<section className="section">
					<div className="container">
						<OrganizationsForm seasons={this.state.seasons} />
					</div>
				</section>
			</>
		)
	}

	componentDidMount() {
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
		}

		fetch(`http://localhost:3000/api/v1/seasons`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({ seasons: data.data })
			})
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.loggedInUser.accessToken,
	}
}
export default connect(mapStateToProps)(TeamsNew)
