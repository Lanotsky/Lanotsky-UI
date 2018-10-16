import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {ModalContainer,ModalComponent} from './Modal-style';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<ModalContainer>
            {
                this.props.elements.map((element)=>(element))
            }
        </ModalContainer>);
    }
}
 
export default Modal;

Modal.defaultProps = {
    elements: (
        [
            <ModalComponent/>
        ]
       
    )
}

Modal.propTypes = {
    element: PropTypes.array.isRequired
}