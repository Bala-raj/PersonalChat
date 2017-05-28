import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Screen, Title, Text, TextInput, Divider, Button, Spinner } from '@shoutem/ui';

import { setUserName, setPhoneNumber, sendCode } from './login-actions';
import firebase from 'firebase';

@connect(state => ({
  user: state.user,
}),
    dispatch => bindActionCreators({ setUserName, setPhoneNumber, sendCode }, dispatch),
)
export default class LoginInterface extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    setUserName: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    sendCode: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
    };

    this.onBlurOfName = this.onBlurOfName.bind(this);
    this.onBlurOfPhone = this.onBlurOfPhone.bind(this);
    this.onChangeOfName = this.onChangeOfName.bind(this);
    this.onChangeOfPhone = this.onChangeOfPhone.bind(this);
    this.onClickOfLogin = this.onClickOfLogin.bind(this);
  }

  onClickOfLogin() {
    /*const recaptchaVerifier = new firebase.auth.RecaptchaVerifier("#login-button", {
      size: 'invisible',
      callback() {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.props.sendCode({ recaptchaVerifier });
      },
    });*/
    this.props.sendCode();
  }

  onChangeOfName = name => this.setState({ name })

  onChangeOfPhone = phone => this.setState({ phone })

  onBlurOfName() {
    const {name} = this.state;
    if (name && this.props.user.name !== name) {
      this.props.setUserName({ name });
    }
  }

  onBlurOfPhone() {
    const { phone } = this.state;
    if (phone && this.props.user.phoneNumber !== phone) {
      this.props.setPhoneNumber({ phone });
    }
  }

  render() {
    const { authorizing, phoneNumber, name } = this.props.user;
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Title>Who are you?</Title>
        <Divider />

        <TextInput
          placeholder="Your Name"
          onChangeText={this.onChangeOfName}
          onBlur={this.onBlurOfName}
        />
        <Divider />
        <TextInput
          placeholder="Phone Number"
          onChangeText={this.onChangeOfPhone}
          onBlur={this.onBlurOfPhone}
        />
        <Divider />

        { authorizing && <Spinner /> }

        {
            !authorizing && phoneNumber && name &&
            <Button ref={c => (this.loginButton = c)} id="login-button" styleName="light" onPress={this.onClickOfLogin}>
              <Text>Get Code</Text>
            </Button>
        }
      </Screen>
    );
  }
}
