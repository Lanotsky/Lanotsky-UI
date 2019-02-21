import React, {Component} from 'react';
import {createStore} from 'redux';
import Toolbar from './components/Toolbar';
import Btn from './components/Btn';
import colorFlip from './reducers/reducer';
import {flipColor, logText} from './actions/index';
import { Provider } from 'react-redux'
import Application from './components/Application'

const store = createStore(colorFlip);
const unsubscribe = store.subscribe(() => console.log(store.getState()))
/*
    todo: implement redux state
*/

// store.dispatch(logText('some-text-value'))
// store.dispatch(flipColor(true))
// console.log('current store-->');
console.log('Root store state =>')
console.log(store.getState());
class Example extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={store}>
                <div>
                    <Application />
                </div>
            </Provider>
        )
    }
}

export default Example;