import React, { Component } from 'react';
import { Layout } from 'antd'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const { Content } = Layout

class MainLayout extends Component {

    render() {
        return (
            <Layout className='layout'>
                <Header />
                <Content style={{ backgroundColor: '#fff' }}>
                    {this.props.children}
                </Content>
                <Footer />
            </Layout>
        );
    }
}

export default MainLayout;