import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav
            className="navbar is-fixed-top is-info"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img
                    src="http://ltabkc.org/files/2017/10/ltablogo-1.png"
                    alt=""
                />
                Bout Manager
                </a>

                <a
                href="https://google.com"
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a href="https://google.com" className="navbar-item">
                    Home
                </a>

                <a href="https://google.com" className="navbar-item">
                    Documentation
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a href="https://google.com" className="navbar-link">
                    More
                    </a>

                    <div className="navbar-dropdown">
                    <a href="https://google.com" className="navbar-item">
                        About
                    </a>
                    <a href="https://google.com" className="navbar-item">
                        Jobs
                    </a>
                    <a href="https://google.com" className="navbar-item">
                        Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a href="https://google.com" className="navbar-item">
                        Report an issue
                    </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button className="button is-link" onClick={() => {this.props.showModal()}}>Register/Login</button>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar