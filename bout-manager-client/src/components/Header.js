import React, { Component } from 'react';
import Modal from './Modal'
import Navbar from "./Navbar";

class Header extends Component {

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
            <>
                <Modal isOpen={this.state.modalIsOpen} hideModal={this.toggleModal} />
                <Navbar showModal={this.toggleModal} />
            </>
        )
    }
    
}

export default Header;
