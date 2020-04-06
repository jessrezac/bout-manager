import React, { PureComponent } from 'react'
import TeamRadio from '../components/TeamRadio'

class TeamRadioContainer extends PureComponent {

    render() {
        return (
			<section className="section">
				<div className="container">
					<h2 className="title is-2">Select A Team</h2>
					<form action="">
						{this.props.teams.length > 0
							? this.props.teams.map(team => {
									return (
										<TeamRadio
											id={team.id}
											name={
												team.attributes.organization
													.name
											}
											orgType={
												team.attributes.organization
													.org_type
											}
										/>
									)
							  })
							: null}
					</form>
				</div>
			</section>
		)
    }
}

export default TeamRadioContainer