import React, { Component } from 'react';

import LoginLayout from '../../layouts/LoginLayout'
import LoginForm from '../../components/LoginForm';

import './style.css';

class LoginPage extends Component {
    render() {
        return (
            <LoginLayout>
                <LoginForm />
            </LoginLayout>
        );
    }
}

export default LoginPage;