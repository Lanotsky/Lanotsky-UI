import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <Btn>
                <Txt>{this.props.text}</Txt>
            </Btn>
        );
    }
}
 
export default TextBtn;

TextBtn.defaultProps = {
    text: 'Text'
}

TextBtn.propTypes = {
    isActive: PropTypes.bool
};