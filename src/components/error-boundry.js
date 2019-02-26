import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicatior from './error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <ErrorIndicatior />;

    return children;
  }
}
