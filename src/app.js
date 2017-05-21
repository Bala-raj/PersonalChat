import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import ChatUI from '../components/ChatUI';
import LoginUI from './login/login';

export default connect(
    (state) => ({
        authorized: state.user.authorized
    })
)(({ authorized, dispatch }) => {
    if (authorized) {
        return (<LoginUI />);
    }else{        
        return (<LoginUI />);
    }
});