import { combineReducers } from 'redux'

const defaultState = {
    isDefault: false,
    text: 'no-text'
}

/* 
    todo:
    Look for a better way to manipulate the state without mutations
*/

function flip(state = defaultState,action){
    switch (action.type) {
        case 'FLIP_COLOR':
            return Object.assign({}, state, state.map((item) => {
                return item.isDefault = action.isDefault;
            }))
    default:
        return state;
    }
}

function log(state = defaultState, action) {
    switch (action.type) {
        case 'LOG':
            // the worst way to change the state
            let tempState = Object.assign([], state);
            tempState.map((item, i) => {
                return item.text = action.text;
            })
            return tempState;
            break;

        default:
            return state;
    }
}

const mainReducer = combineReducers({flip})
// unecessary combine reducers since I only have one

export default combineReducers({mainReducer});
