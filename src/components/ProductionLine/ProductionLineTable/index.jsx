import React, { Component } from 'react';
import { Table, Button, Icon } from 'antd'
import { connect } from 'react-redux'

const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Data da criação',
        dataIndex: 'createdAt',
        key: 'createdAt'
    },
    {
        title: 'Ações',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, action) => (
            <span>
                <Button style={{ backgroundColor: 'gold' }}><Icon type='edit' /></Button>
                <Button type='danger'><Icon type='delete' /></Button>
            </span>
        )
    }
];

class ProductionLineTable extends Component {
    render() {
        return (
            <Table dataSource={this.props.productionLines} columns={columns} />
        );
    }
}

const mapStateToProps = state => {
    return { productionLines: state.productionLines };
};

export default connect(mapStateToProps, null)(ProductionLineTable);