import React, { Component } from "react"
import { Link, Route, Switch } from "react-router-dom"
import ProfileForm from "./ProfileForm.js"
import TeamPeopleForm from "./TeamPeopleForm.js"

class Settings extends Component {
    

	render() {

        return (
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-one-quarter">
							<aside className="menu">
								<p className="menu-label">User</p>
								<ul className="menu-list">
									<li>
										<Link to="/settings/profile">
											Profile
										</Link>
									</li>
								</ul>
								<p className="menu-label">Affiliations</p>
								<ul className="menu-list">
									<li>
										<Link to="/settings/team">Team</Link>
									</li>
								</ul>
								<p className="menu-label">Admin</p>
								<ul className="menu-list">
									<li>
										<a>District Settings</a>
									</li>
									<li>
										<a>Round Settings</a>
									</li>
								</ul>
							</aside>
						</div>
						<div className="column">
							<Switch>
								<Route
									path="/settings/profile"
									component={ProfileForm}
								/>
								<Route
									path="/settings/team"
									component={TeamPeopleForm}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Settings
