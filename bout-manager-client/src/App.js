import React, { Component } from 'react';
import Hero from './components/Hero'
import Modal from './components/Modal'
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends Component {

  state = {
    modalIsOpen: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }))
  }

  render() {

    return (
      <Router>
        <Modal isOpen={this.state.modalIsOpen} hideModal={this.toggleModal} />
        <Navbar showModal={this.toggleModal} />
            <Switch>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Hero />
                </Route>
            </Switch>
    </Router>)
  }
}

export default App;
