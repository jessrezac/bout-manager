import React, { PureComponent } from 'react'
import TeamRadio from '../components/TeamRadio'

class TeamRadioContainer extends PureComponent {

	renderTeamRadios = () => {
		return this.props.teams.map(team => {
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
					setSelectedTeam={
						this.props.setSelectedTeam
					}
					selectedTeam={
						this.props.selectedTeam
					}
				/>
			)
		})
	}

    render() {
        return (
			<section className="section">
				<div className="container">
					<h2 className="title is-2">Select Your Team</h2>
					{this.props.teams.length > 0 ? (
						this.renderTeamRadios()
					) : (
						<p className="content">
							Choose a district to load active teams.
						</p>
					)}
				</div>
			</section>
		)
    }
}

export default TeamRadioContainer