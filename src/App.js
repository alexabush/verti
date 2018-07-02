import React, { Component } from 'react';
import './App.css';
import Navbar from './components/organism/Navbar';
import Header from './components/organism/Header';
import Stories from './components/organism/Stories';
import Copy from './components/organism/Copy';
import Footer from './components/organism/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Stories />
        <Copy />
        <Footer />
      </div>
    );
  }
}

export default App;
