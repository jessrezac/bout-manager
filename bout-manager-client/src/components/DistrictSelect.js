import React, { Component } from 'react'
import { connect } from 'react-redux'

class DistrictSelect extends Component {
	state = {
		districts: []
	}

	renderDistricts = () => {
        return this.state.districts ? this.state.districts.map((district) => <option key={district.id} value={district.id}>{district.name}</option>) : null
    }

    handleChange= (e) => {
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.access_token
			}
		}
		fetch(
			`http://localhost:3000/api/v1/districts/${e.target.value}/active_teams`,
			configObj
		)
			.then(resp => resp.json())
			.then(data => {
				this.props.setTeams(
					data
				)
			})

    }

	render() {
		return (
			<div className="container">
					<div className="control">
						<h2 className="title is-2">Choose Your District</h2>
						<div className="select">
							<select name="districtId" onChange={this.handleChange}>
								<option>Select</option>
								{this.renderDistricts()}
							</select>
						</div>
					</div>
			</div>
		)
	}

	componentDidMount() {
		const configObj = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: "Bearer " + this.props.access_token
			}
		}
		fetch(`http://localhost:3000/api/v1/districts`, configObj)
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					districts: data
				})
			})
	}
}

    const mapStateToProps = state => {
        return {
            access_token: state.user.user.access_token,
            id: state.user.user.person_id
        }
    }

export default connect(mapStateToProps)(DistrictSelect)