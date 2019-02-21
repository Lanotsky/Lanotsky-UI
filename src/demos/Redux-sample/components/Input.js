import React, {Component} from 'react';
import {connect} from 'react-redux';



class ConnectedInput extends Component {
    constructor(props){
        super(props);
        this.state = { 
            link: ''
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submitted');
        console.log('current-state linkx');
        console.log(this.state.link)
    }

    handleChange(event){
        event.preventDefault();
        console.log('adding link');
        this.setState({ link: event.target.value });
    }

    render(){
        return(
            <div className='redux-input'>
                
            </div>
        )
    }
}

const Input = ConnectedInput;

export default Input;