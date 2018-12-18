import React, {Component} from 'react';
import {connect} from 'react-redux';

class ConnectedInput extends Component {
    render(){
        return(
            <div className='redux-input'>
                <form>
                    <input type="text" name="link"/>
                </form>
            </div>
        )
    }
}

const Input = ConnectedInput;

export default Input;