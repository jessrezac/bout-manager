import React, { Component } from 'react'
import { connect } from "react-redux"
import { setLoginError } from "./../actions/user"

class RegisterForm extends Component {

    state = {
        email: "",
        password: "",
        password_confirmation: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const configObj = { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({api_v1_user: this.state})
        }
        fetch("http://localhost:3000/api/v1/users", configObj)
            .then(resp => resp.json())
            .then(data => {
                data.error ? this.props.setLoginError("Email address or password are incorrect.") : this.props.setLoginError("")
                this.props.setLoginSuccess(data)
            });
        this.setState({
            email: "",
            password: "",
            password_confirmation: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <div className="control">
                        <input onChange={this.handleInputChange} className="input is-primary" type="email" placeholder="Email address" name="email" value={this.state.email} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleInputChange} className="input is-primary" type="password" placeholder="Password" name="password" value={this.state.password} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="password">Password Confirmation</label>
                        <input onChange={this.handleInputChange} className="input is-primary" type="password" placeholder="Confirm password" name="password_confirmation" value={this.state.password_confirmation} />
                    </div>
                </div>
                <p className="content has-text-warning">{this.props.loginError}</p>
                <div className="control">
                    <button type="submit" className="button is-primary">Register</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginError: state.user.loginError
    }
}

export default connect(mapStateToProps, { setLoginError })(RegisterForm)