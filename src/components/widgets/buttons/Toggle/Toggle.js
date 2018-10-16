import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Btn, Switch,SwitchActive} from './toggle-style';

class Toggle extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isActive: this.props.isActive }
    // }
    render() { 
        return ( 
            <Btn>
                  {(this.props.isActive) ? <SwitchActive/> : <Switch />}
            </Btn>
        );
    }
}
 
export default Toggle;

Toggle.defaultProps = {
    isActive: false
};
  

Toggle.propTypes = {
    isActive: PropTypes.bool.isRequired
};