import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

function CustomFooter(props) {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Felipe de Oliveira&copy; - 2019
        </Footer>
    )
}

export default CustomFooter