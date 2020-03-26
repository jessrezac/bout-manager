import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class Modal extends Component {

    state = {
        isLoginSelected: true
    }

    toggleLogin = () => {
        this.setState(prevState => ({
            isLoginSelected: !prevState.isLoginSelected
        }));
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head has-background-white">
                        <p className="modal-card-title">Bout Manager</p>
                        <button className="delete" aria-label="close" onClick={() => {this.props.hideModal()}}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="tabs is-medium is-centered">
                            <ul>
                                <li className={this.state.isLoginSelected ? "is-active" : undefined}><a href="#" onClick={this.toggleLogin}>Login</a></li>
                                <li className={!this.state.isLoginSelected ? "is-active" : undefined}><a href="#" onClick={this.toggleLogin}>Register</a></li>
                            </ul>
                        </div>
                        {this.state.isLoginSelected && <LoginForm />}
                        {!this.state.isLoginSelected && <RegisterForm />}
                    </section>
                </div>
            </div>
        );
    }

}

export default Modal

