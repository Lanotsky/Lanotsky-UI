import React from 'react';
import {MyContext} from '../contexts';

class GrandChild extends React.Component {
    render(){
        /*
            return(
                <MyContext.Consumer>
                    {
                        value => <h1>{value}></h1>
                    }
                </MyContext.Consumer>
            )
        */
        return(
            <div>
                {this.context}
            </div>
        )
    }
} 
// extracts context from context storage
GrandChild.contextType = MyContext;


export default GrandChild;