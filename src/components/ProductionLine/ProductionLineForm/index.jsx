import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import { addProductionLine } from '../../../actions/productionLineActions'

class ProductionLineForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Form '+values)
                this.props.addProductionLine({
                    name: values.name,
                    createdAt: '2020-01-30'
                });
            }
        });        
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <Form.Item label='Nome da Linha'>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Informe o nome de linha'}]
                    })(<Input />)}                    
                </Form.Item>     
                <Form.Item>
                    <Button htmlType='submit' type='primary'>
                        <Icon type='plus' />
                    </Button>
                </Form.Item>           
            </Form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProductionLine: productionLine => dispatch(addProductionLine(productionLine))
    }
}; 

const WrappedForm = Form.create({ name: 'new_production_line' })(ProductionLineForm)
export default connect(null, mapDispatchToProps)(WrappedForm);