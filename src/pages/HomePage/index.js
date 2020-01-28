import React, { Component } from 'react';

import MainLayout from '../../layouts/MainLayout'
import UserHeader from '../../components/UserHeader'

class HomePage extends Component {
    render() {
        return (
            <MainLayout>
                <UserHeader />
            </MainLayout>            
        );
    }
}

export default HomePage;