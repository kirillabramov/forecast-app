import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WeatherList extends Component {
  static get propTypes() {
    return {
      weather: PropTypes.instanceOf(Object)
    };
  }

  renderWeather = cityData => {
    const { city } = cityData;
    console.log(city);
    return (
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  };

  render() {
    const {
      weather: { weather }
    } = this.props;
    console.log(weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        {weather.length === undefined ? null : <tbody>{weather.map(this.renderWeather)}</tbody>}
      </table>
    );
  }
}

WeatherList.defaultProps = {
  weather: {}
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(
  mapStateToProps,
  null
)(WeatherList);
