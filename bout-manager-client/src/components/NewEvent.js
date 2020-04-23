import React, { Component } from "react"
import { connect } from "react-redux"

class NewEvent extends Component {

    state = {
        name: "", 
        location: "",
        datetime: null
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

	handleSubmit = e => {
        e.preventDefault()
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.accessToken,
			},
			body: JSON.stringify({
				season_id: this.props.seasonId,
			}),
		}
		fetch(`http://localhost:3000/api/v1/events`, configObj)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			})
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title is-1">Add An Event</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<div className="control">
								<label htmlFor="name">Event Name</label>
								<input
									type="text"
									className="input is-primary"
									placeholder="Event Name"
									name="name"
									onChange={this.handleChange}
									value={this.state.name}
								/>
							</div>
						</div>
						<div className="field is-grouped">
							<div className="control">
								<label htmlFor="location">Location</label>
								<input
									type="text"
									className="input is-primary"
									placeholder="Location"
									name="location"
									onChange={this.handleChange}
									value={this.state.location}
								/>
							</div>
							<div className="control">
								<div className="control">
									<label htmlFor="datetime">Date/Time</label>
									<input
										type="datetime-local"
										className="input is-primary"
										placeholder="Date/Time"
										name="datetime"
										onChange={this.handleChange}
										value={this.state.dateTime}
									/>
								</div>
							</div>
						</div>
						<div className="field">
                            <div className="control">
                                <input list="teams" />
                                <datalist id="teams">
                                    <option value=""></option>
                                </datalist> 
                            </div>
                        </div>
					</form>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accessToken: state.user.user.access_token,
		seasonId: state.team.team.season_id,
	}
}

export default connect(mapStateToProps)(NewEvent)
