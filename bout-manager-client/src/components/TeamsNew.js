import React, { Component } from "react"
import TeamsForm from "./TeamsForm"

class TeamsNew extends Component {
	state = {
		orgName: "",
		orgType: "",
		orgId: "",
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Add A Team</h1>
					<TeamsForm
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						{...this.state}
					/>
				</div>
			</section>
		)
	}
}

export default TeamsNew
