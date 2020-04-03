import React, { PureComponent } from 'react'

class TeamSelectContainer extends PureComponent {

    render() {
        return (
            <div className="container">
                {this.props.teams.length > 0 ? this.props.teams.map(team => team.id) : null}
            </div>
        )
    }
}

export default TeamSelectContainer