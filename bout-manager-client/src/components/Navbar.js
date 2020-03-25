import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav
            className="navbar is-fixed-top is-info"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                <img
                    src="http://ltabkc.org/files/2017/10/ltablogo-1.png"
                    alt=""
                />
                Bout Manager
                </Link>

                <a
                href="#"
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
                <Link to="/" className="navbar-item">
                    Home
                </Link>

                <Link to="/dashboard" className="navbar-item">
                    Dashboard
                </Link>

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