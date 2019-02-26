import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import fetchWeather from '../actions';
import GoogleMap from '../components/google-map';
import '../main.css';

class WeatherList extends Component {
  static get propTypes() {
    return {
      weather: PropTypes.instanceOf(Object),
      fetchWeather: PropTypes.func
    };
  }

  componentDidMount() {
    const { fetchWeather } = this.props;
    fetchWeather('Berdyansk');
  }

  renderWeather = cityData => {
    const { city, list } = cityData;
    const temps = _.map(list.map(weather => weather.main.temp), temp => temp - 273.15);
    const humidity = list.map(weather => weather.main.humidity);
    const { lon, lat } = city.coord;

    return (
      <tr key={city.id}>
        <td>
          <GoogleMap lng={lon} lat={lat} />
        </td>
        <td>{city.population}</td>
        <td>
          <Chart data={temps} units="°C" color="#FF5733" />
        </td>
        <td>
          <Chart data={humidity} units="%" color="#212F3C" />
        </td>
      </tr>
    );
  };

  render() {
    const { weather } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Population</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

WeatherList.defaultProps = {
  weather: [],
  fetchWeather: () => {}
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherList);
