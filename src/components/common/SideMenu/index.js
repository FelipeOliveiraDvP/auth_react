import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { 
    Layout,
    Menu,
    Icon
} from 'antd'

import './style.css'

const { Sider } = Layout

class SideMenu extends Component {
    state = {
        activeKey: '1'
    }

    redirectTo = (route, key) => {
        this.setState({ activeKey: key })
        this.props.history.push(route)
    }

    render() {
        return (
            <Sider>
                <div className='logo'>LOGO</div>
                <Menu
                    theme='dark'
                    mode='inline'      
                    defaultSelectedKeys={[this.state.activeKey]}              
                >
                    <Menu.Item key='1'>
                        <Icon type='user' />
                        <span 
                            className='nav-text'
                            onClick={() => this.redirectTo('/home', '1')}
                        >
                            Usuários
                        </span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Icon type='team' />
                        <span 
                            className='nav-text'
                            onClick={() => this.redirectTo('/people', '2')}
                        >
                            Pessoas
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(SideMenu);