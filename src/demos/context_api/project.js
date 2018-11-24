import React, { Component } from 'react'
import GrandChild from './components/GrandChild';
import {MyContext} from './cusotom_context';

const Nested_dolls = (props) =>{
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}


class Context_api extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 'some-string-value'
        }
    }
    render(){
        return(
            <MyContext.Provider value="some-value">
                <Nested_dolls className="nested-1 doll">
                    <Nested_dolls className="nested-2 doll">
                        <Nested_dolls className="nested-3 doll">
                            <GrandChild />
                        </Nested_dolls>
                    </Nested_dolls>
                </Nested_dolls>
            </MyContext.Provider>
        )
    }
}

export default Context_api;