import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  user: state.user,
}),
    dispatch => bindActionCreators({ }, dispatch),
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Hello world! </h1>
      </div>
    );
  }
}
