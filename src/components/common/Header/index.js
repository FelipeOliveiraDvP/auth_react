import React, { Component } from 'react';
import { 
    Layout,
    Menu,
    Row,
    Col,
    Avatar,
    Popover
} from 'antd';
import { withRouter } from 'react-router-dom'
import AuthService from '../../../services/authService'
import './style.css'

const { Header } = Layout;

class CustomHeader extends Component {
    state = {
        visible: false
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    handleVisibleChange = visible => {
        this.setState({ visible })
    }

    handleLogout = e => {
        AuthService.logout();
        this.props.history.push('/')
    }

    render() {
        return (
            <Header>
                <Row>
                    {/* Logo */}
                    <Col span={6}>
                        <div className='logo'>
                            LOGO
                        </div>
                    </Col>
                    {/* Nav */}
                    <Col span={17}>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            style={{ lineHeight: '64px' }}
                        >                            
                        </Menu>  
                    </Col>
                    {/* Avatar */}
                    <Col span={1}>
                        <Popover
                            content={<a onClick={this.handleLogout}>Sair</a>}
                            title='Menu do Usuário'
                            trigger='click'
                            visible={this.state.visible}
                            onVisibleChange={this.handleVisibleChange}
                        >
                            <Avatar size='large' icon='user' />
                        </Popover>                                                
                    </Col>
                </Row>                
            </Header>
        );
    }
}

export default withRouter(CustomHeader);