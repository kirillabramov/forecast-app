import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  mapRef = React.createRef();

  static get propTypes() {
    return {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    };
  }

  componentDidMount() {
    let { lat, lng } = this.props;
    lat = +lat;
    lng = +lng;
    (() =>
      new window.google.maps.Map(this.mapRef.current, {
        zoom: 11,
        center: { lat, lng }
      }))();
  }

  render() {
    return <div ref={this.mapRef} />;
  }
}

export default GoogleMap;
