import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import AuthService from '../../services/authService'

function PrivateRoute(props) {
    const userInfo = AuthService.getUserInfo() || null;
    if (userInfo) {
        return (<Route path={props.path} component={props.component} />)
    } else {
        return (<Redirect to='/' />)
    }
}

export default PrivateRoute;