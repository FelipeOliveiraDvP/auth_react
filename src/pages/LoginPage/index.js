import React, { Component } from 'react';

import LoginLayout from '../../layouts/LoginLayout'
import LoginForm from '../../components/LoginForm';
import AuthService from '../../services/authService'

import './style.css';

class LoginPage extends Component {
    componentDidMount() {
        if(AuthService.getUserInfo()) {
            this.props.history.push('/home')
        }
    }

    render() {
        return (
            <LoginLayout>
                <LoginForm />
            </LoginLayout>
        );
    }
}

export default LoginPage;