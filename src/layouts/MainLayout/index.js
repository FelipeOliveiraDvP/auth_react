import React, { Component } from 'react';
import { Layout } from 'antd'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import SideMenu from '../../components/common/SideMenu'

const { Content } = Layout

class MainLayout extends Component {

    render() {
        return (
            <Layout className='layout'>
                <SideMenu />
                <Layout>
                    <Header />                
                    <Content style={{ backgroundColor: '#fff', padding: '10px' }}>
                        {this.props.children}
                    </Content>
                    <Footer />
                </Layout>                
            </Layout>
        );
    }
}

export default MainLayout;