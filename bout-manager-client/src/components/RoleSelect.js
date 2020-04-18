import React, { Component } from 'react'

class RoleSelect extends Component {

    render() {
        return (
			<section className="section">
				<div className="container">
					<div className="control">
						<h2 className="title is-2">What Is Your Role?</h2>
						<div className="select">
							<select
								name="districtId"
								onChange={this.props.setRole}>
								<option>Select</option>
								<option
									value="poet"
									selected={
										this.props.selectedRole === "poet"
									}>
									Poet
								</option>
								<option
									value="sponsor"
									selected={
										this.props.selectedRole === "sponsor"
									}>
									Sponsor
								</option>
								<option
									value="judge"
									selected={
										this.props.selectedRole === "judge"
									}>
									Judge
								</option>
								<option
									value="admin"
									selected={
										this.props.selectedRole === "admin"
									}>
									Admin
								</option>
							</select>
						</div>
					</div>
				</div>
			</section>
		)
    }

}

export default RoleSelect