import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../actions/user"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

class Navbar extends Component {
	renderUserButton = () => {
		if (this.props.isLoggedIn) {
			return <LogoutButton logout={this.props.logout} />
		}

		return <LoginButton showModal={this.props.showModal} />
	}

	render() {
		return (
			<nav
				id="navbar"
				className="navbar is-info"
				role="navigation"
				aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						<img
							src="http://ltabkc.org/files/2017/10/ltablogo-1.png"
							alt=""
						/>
						Bout Manager
					</Link>

					<a
						href="#navbar"
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<Link to="/" className="navbar-item">
							Home
						</Link>

						<Link to="/events" className="navbar-item">
							Events
						</Link>

						<Link to="/welcome" className="navbar-item">
							Welcome
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link to="#navbar" className="navbar-link">
								Settings
							</Link>

							<div className="navbar-dropdown">
								<Link
									to="/settings/profile"
									className="navbar-item">
									Profile
								</Link>
								<Link
									to="/settings/team"
									className="navbar-item">
									Team
								</Link>
								<hr className="navbar-divider" />
								<Link
									to="/settings/district"
									className="navbar-item">
									District Settings
								</Link>
								<Link
									to="/settings/round"
									className="navbar-item">
									Round Settings
								</Link>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								{this.renderUserButton()}
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loggedInUser.isLoginSuccess,
	}
}

export default connect(mapStateToProps, { logout })(Navbar)
