import { createStore, combineReducers } from 'redux'

const heroReducer = (heroes = [{ id: 11, name: 'Subramanian' }], action) => {
    switch (action.type) {
        case 'ADDHERO':
            return [...heroes, action.payload]
        default:
            return heroes;
    }
};
const counterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
};
//Compose All Reducers into one Reducer
const rootReducer = combineReducers({
    heroReducer,
    counterReducer
})
const store = createStore(rootReducer);
store.subscribe(function () {
    let state = store.getState();
    console.log(state);
})

//Hero Action
const ADDHERO_ACTION = {
    type: 'ADDHERO',
    payload: {
        id: 12,
        name: 'WindStorm'
    }
};

store.dispatch(ADDHERO_ACTION);
//Counters
const INCREMENT_ACTION = {
    type: 'INCREMENT'
};
const DECREMENT_ACTION = {
    type: 'DECREMENT'
}
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch(DECREMENT_ACTION);