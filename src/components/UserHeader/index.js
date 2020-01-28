import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserHeader extends Component {

    render() {
        return (
            <div>Bem vindo {this.state.name}</div>
        )
    }    
}

const mapStateToProps = state => ({
    name: state.name 
})

export default connect(mapStateToProps, null)(UserHeader)