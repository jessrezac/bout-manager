import React, { Component } from 'react'

class Modal extends Component {

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
            .then(data => console.log(data))
    }

    render() {
        return (
            <div className={"modal " + this.props.active}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head has-background-white">
                        <p className="modal-card-title">Login</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
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
                            <div className="control">
                                <button type="submit" className="button is-primary">Submit</button>
                            </div>
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        );
    }

}

export default Modal

