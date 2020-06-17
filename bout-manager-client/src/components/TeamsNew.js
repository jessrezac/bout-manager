import React, { Component } from "react"
import TeamsForm from "./TeamsForm"
import OrganizationsForm from "./OrganizationsForm"

class TeamsNew extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Add A Team</h1>
					<TeamsForm />
					<OrganizationsForm />
				</div>
			</section>
		)
	}
}

export default TeamsNew
