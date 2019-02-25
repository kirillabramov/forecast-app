import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchWeather from '../actions';

class SearchBar extends Component {
  state = {
    term: ''
  };

  static get propTypes() {
    return {
      fetchWeather: PropTypes.func
    };
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { fetchWeather } = this.props;
    const { term } = this.state;
    fetchWeather(term);
  };

  render() {
    const { term } = this.state;
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast of Ukraine cities (write city in English)"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
          required
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  fetchWeather: () => {}
};

const mapStateToProps = ({ weather }) => {
  return {
    weather
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(SearchBar);
