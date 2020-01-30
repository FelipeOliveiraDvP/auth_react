import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { withRouter } from 'react-router-dom';

import './style.css';

import AuthService from '../../services/authService'

class LoginForm extends Component {
    state = {
        isSubmitting: false,
        loginFail: false
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ isSubmitting: true, loginFail: false })
                const credentials = {
                    email: values.username,
                    password: values.password
                }
                AuthService.login(JSON.stringify(credentials))
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('userInfo', JSON.stringify(res.data))
                            this.props.history.push('/home')
                        }
                    }).catch((error) => {
                        this.setState({
                            isSubmitting: false,
                            loginFail: true
                        })                        
                    })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Informe o nome de usuário' }]
                    })(
                        <Input
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder='Usuário'
                            disabled={this.state.isSubmitting}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Informe a senha' }]
                    })(
                        <Input
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='password'
                            placeholder='Senha'
                            disabled={this.state.isSubmitting}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(<Checkbox disabled={this.state.isSubmitting}>Lembrar de mim</Checkbox>)}
                    <a href='/forgot' className='login-form-forgot'>
                        Esqueci minha senha
                    </a>
                    <Button 
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                        loading={this.state.isSubmitting}
                    >
                        Entrar
                    </Button>
                    <a href='/register'>Criar uma nova conta</a>
                </Form.Item>
                {this.state.loginFail ? <Alert message='Usuário ou senha inválidos!' type='error' /> : null}
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default withRouter(WrappedLoginForm)