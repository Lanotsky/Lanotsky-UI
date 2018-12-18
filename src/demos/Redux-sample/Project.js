import React, {Component} from 'react';
import store from './store';
import {addArticle} from './actions/index';
import { Provider } from "react-redux";
import Application from './components/Application';

console.log(store.getState())
store.subscribe(()=>{
    console.log('store updated');
});

store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }))
console.log(store.getState())
class Example extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={store}>
                <Application/>
            </Provider>
        )
    }
}

export default Example;