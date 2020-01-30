import React, { Component } from 'react';
import { PageHeader } from 'antd'

import MainLayout from '../../layouts/MainLayout'
import ProductionLineForm from '../../components/ProductionLine/ProductionLineForm'
import ProductionLineTable from '../../components/ProductionLine/ProductionLineTable'

class ProductionLinePage extends Component {
    render() {
        return (
            <MainLayout>
                <PageHeader 
                    title='Linhas de Produção'
                    style={{ border: '1px solid rgb(235,237,240)' }}
                />
                <ProductionLineForm />
                <ProductionLineTable />                
            </MainLayout>            
        );
    }
}

export default ProductionLinePage;