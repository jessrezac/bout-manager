import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoginPending, setLoginSuccess, setLoginError, logout } from './../actions/user'

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setLoginPending()
        const configObj = { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(Object.assign({}, this.state, {grant_type: "password"}))
        }
        fetch("http://localhost:3000/oauth/token", configObj)
            .then(resp => resp.json())
            .then(data => {
                data.error ? this.props.setLoginError("Email address or password are incorrect.") : this.props.setLoginError("")
                this.props.setLoginSuccess(data)
            })

        this.setState({
            email: "",
            password: "",
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
                <p className="content has-text-warning">{this.props.loginError}</p>
                <div className="control">
                    <button type="submit" className="button is-primary">Login</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoginPending: state.user.isLoginPending,
        isLoginSuccess: state.user.isLoginSuccess,
        loginError: state.user.loginError,
        user: state.user.user
    }
}

export default connect(mapStateToProps, { setLoginPending, setLoginSuccess, setLoginError, logout })(LoginForm);