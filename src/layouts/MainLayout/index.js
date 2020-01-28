import React, { Component } from 'react';
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

class MainLayout extends Component {
    render() {
        return (
            <Layout className='layout'>
                <Header>Header</Header>
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