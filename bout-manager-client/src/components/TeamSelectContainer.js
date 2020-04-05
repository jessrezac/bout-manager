import React, { PureComponent } from 'react'

class TeamSelectContainer extends PureComponent {

    render() {
        return (
			<div className="container">
				<form action="">
					{this.props.teams.length > 0
						? this.props.teams.map(team => {
								return (
									<label
										key={team.id}
										class="radio"
										for={team.attributes.organization.name}>
										<input
											type="radio"
											name="team"
											value={team.attributes.id}
											id={
												team.attributes.organization.name
											}></input>
										{team.attributes.organization.name}{" "}
										{team.attributes.organization.org_type}
									</label>
								)
                            })
						: null}
				</form>
			</div>
		)
    }
}

export default TeamSelectContainer