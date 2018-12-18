import React, { Component } from 'react';
import { connect } from 'react-redux';

class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state={
            flipColor: this.props.mainReducer.flip.isDefault
        }
    }
    render(){
        console.log('Toolbar state')
        console.log(this.state.flipColor)
        let style={"backgroundColor": "cyan"}
        if(this.state.flipColor){
            style={"backgroundColor": "blue"}
        }
        return(
            <div className="toolbar" style={style}>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log('logging current store state here ----')
    console.log(state)
    return state
}

export default connect(mapStateToProps)(Toolbar);