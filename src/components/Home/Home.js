import React, { Component } from 'react';
import './Home.css';
import homeLogo from './images/home-logo.png';
import SearchBar from '../SearchBar/SearchBar';

class Home extends Component {
  render() {
    return (
      <section className="homeContainer">
        <img src={homeLogo} className="homeLogo" alt="Happy Hour Hero Logo" />
        <h2>Find your happy hour:</h2>
        <SearchBar />
      </section>
    );
  }
}

export default Home;
