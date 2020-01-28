import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import AuthService from '../../services/authService'

const { Header, Content, Footer } = Layout

class MainLayout extends Component {

    logout = e => {
        AuthService.logout();
        this.props.history.push('/')
    }

    render() {
        return (
            <Layout className='layout'>
                <Header>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key='1' onClick={this.logout}>Logout 1</Menu.Item>
                    </Menu>
                </Header>
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

export default withRouter(MainLayout);