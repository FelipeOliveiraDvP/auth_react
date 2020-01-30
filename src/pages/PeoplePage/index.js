import React, { Component } from 'react';
import { PageHeader, Table, Spin } from 'antd'
import axios from 'axios'

import MainLayout from '../../layouts/MainLayout'
  
const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Altura',
        dataIndex: 'height',
        key: 'height',
    },
    {
        title: 'Peso',
        dataIndex: 'mass',
        key: 'mass',
    },
    {
        title: 'Gênero',
        dataIndex: 'gender',
        key: 'gender'
    }
];

class PeoplePage extends Component {
    state = {
        dataSource: [],
        selectedRowKeys: [],
        loading: true
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    getPeople = () => {
        const dataSource = [];
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                res.data.results.forEach((p, i) => {
                    const people = {};
                    
                    people.key = i;
                    people.name = p.name;
                    people.height = p.height;
                    people.mass = p.mass;
                    people.gender = p.gender;

                    dataSource.push(people);
                })

                this.setState({ dataSource, loading: false });                
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getPeople()
    }

    render() {        
        const { loading, selectedRowKeys, dataSource } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        console.log(dataSource.length)
        return (
            <MainLayout>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235,237,240)'
                    }}
                    title='Pessoas'
                    subTitle='Listagem de Pessoas'
                />
                <Table
                    loading={loading}
                    dataSource={dataSource}
                    columns={columns}
                    rowSelection={rowSelection}
                />                
            </MainLayout>            
        );
    }
}

export default PeoplePage;