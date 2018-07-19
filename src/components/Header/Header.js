import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      city: null, 
      state: null,
      zip: null,
      longitude: null,
      latitude: null
    };
  }

  componentDidMount = () => {
    const { city, state, zip, longitude, latitude } = this.props.location;
  
    if (this.props.location.city) {
      this.setState({
        city,
        state
      });
    }
  }

  render() {
    const { city, state, zip, longitude, latitude } = this.props.location;

    return (
      <header>
        <section className="headerContainer">
          <i className="fas fa-bars"></i>
          <div className="headerLocation">
            { this.props.location.city ? <p>{ city }, { state } </p> : null }
            <i class="fas fa-caret-down"></i>
          </div>
        </section>
      </header>
    );
  }
}

export const mapStateToProps = (state) => ({
  location: state.location
});

export default connect(mapStateToProps)(Header);
