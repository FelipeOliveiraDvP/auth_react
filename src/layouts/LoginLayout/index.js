import React, { Component } from 'react';
import { Layout } from 'antd';

import './style.css'

const { Content } = Layout;

class LoginLayout extends Component {
    render() {
        return (
            <Layout className='layout'>
                <Content className='content'>
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default LoginLayout;