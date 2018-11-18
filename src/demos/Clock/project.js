import React, { Component } from 'react'
import PropTypes from 'prop-types'



/*
    * Simple clock that samples the lifecycle method of React.js
    * We can mount and unmount the clock to simulate ticking
*/
class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date: ''
        }

    }  

    componentDidMount(){
       this.timerID = setInterval(()=> {
           this.tick();
       },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div className="Clock">
                <div>
                    {this.state.date.toLocaleString()}
                </div>
            </div> 
        )
    }
}

export default Clock;