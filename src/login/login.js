import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';

import Input from '../components/Input';
import LoginButton from './login-button';
import { setUserName } from './login-actions';

@connect(state => ({
  authorizing: state.user.authorizing,
}),
    dispatch => bindActionCreators({ setUserName }, dispatch),
)
export default class LoginInterface extends Component {
  static propTypes = {
    authorizing: PropTypes.bool.isRequired,
  }

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Title>Who are you?</Title>
        <Divider />

        <Input
          placeholder="Your name here"
          submitAction={this.props.setUserName}
          submitOnBlur
          noclear
          ref="username"
        />
        <Divider />

        {this.props.authorizing ? <Spinner /> : <LoginButton />}
      </Screen>
    );
  }
}
