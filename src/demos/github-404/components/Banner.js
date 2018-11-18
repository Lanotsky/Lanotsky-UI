import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Banner extends Component {

    render() { 
        return (
            <div className="_404-banner">
                {this.props.children}
            </div>
        );
    }
}
 
export default Banner;