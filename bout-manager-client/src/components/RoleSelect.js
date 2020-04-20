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
								onChange={this.props.setRole}
								value={this.props.selectedRole}>
								<option>Select</option>
								<option
									value="poet">
									Poet
								</option>
								<option
									value="sponsor">
									Sponsor
								</option>
								<option
									value="judge">
									Judge
								</option>
								<option
									value="admin">
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