import React from 'react';
import {MyContext} from '../cusotom_context';

class GrandChild extends React.Component {
    render(){
        return(
            <MyContext.Consumer>
                {
                    (value) => <h1>{value}</h1>
                }
            </MyContext.Consumer>
        )
    }
} 


export default GrandChild;