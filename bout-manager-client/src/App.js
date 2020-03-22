import React from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import './App.css';

function App() {
  return (
      <>
          <Modal active="is-active" />

          <Navbar />
          <Hero />
      </>
  );
}

export default App;
