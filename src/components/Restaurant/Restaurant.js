import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Restaurant.css';
import Header from '../Header/Header';
import RestaurantInfo from '../RestaurantInfo/RestaurantInfo';
import ContactBar from '../ContactBar/ContactBar';

class Restaurant extends Component {
  constructor (props) {
    super(props);

  }


  render() {
    return (
      <section className="restaurantContainer">
        <Header />
        <RestaurantInfo />
        <ContactBar />
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  location: state.location
});

export default withRouter(connect(mapStateToProps)(Restaurant));
