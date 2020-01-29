import React, { Component } from 'react';
import { Layout } from 'antd'

import Header from '../../components/common/Header'

const { Content, Footer } = Layout

class MainLayout extends Component {

    render() {
        return (
            <Layout className='layout'>
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        );
    }
}

export default MainLayout;