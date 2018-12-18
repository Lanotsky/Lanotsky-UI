import React from 'react';
import {connect} from 'react-redux';
import {flipColor} from '../actions/index'

class Btn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            switch: false,
        }
    }
    onClick(e){
        this.props.todos(this.state.switch);
        this.setState({
            switch: !this.state.switch
        })
    }
    render(){
        console.log('Button props dispatch state value onClick =>')
        console.log(this.props)
        return (
            <div className="btn" onClick={(e)=>{
                this.onClick(e);
            }}>
                <span>toggle</span>
            </div>
        )    
    }

}

const mapDispatchToProps = state => {
    return {
        todos: flipColor
    }
}


export default connect(null, mapDispatchToProps)(Btn);
