import React, { Component } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import './App.css';

class App extends Component {

  state = {
    modalIsOpen: true
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  render() {
    return (
      <>
        <Modal isOpen={this.state.modalIsOpen} hideModal={this.toggleModal} />

        <Navbar showModal={this.toggleModal} />
        <Hero />
      </>
    );
  }
}

export default App;
