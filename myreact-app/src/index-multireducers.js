import { combineReducers, createStore } from "redux";
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { useSelector, Provider, useDispatch } from "react-redux";


//action constants
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const INCREMENTBYAMOUNT = 'counter/incrementByAmount'

const IncrementReducer = (state = { value: 100 }, action) => {
    //biz logic
    switch (action.type) {
        case INCREMENT:
            //immutable
            return { ...state, value: state.value + 1 }
        default:
            return state;
    }
}

const DecrementReducer = (state = { value: 1000 }, action) => {
    //biz logic
    switch (action.type) {
        case DECREMENT:
            return { ...state, value: state.value - 1 }
        //immutable
        default:
            return state;
    }
}

const IncrementByAmountReducer = (state = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case INCREMENTBYAMOUNT:
            //immutable
            return { ...state, value: state.value + action.payload }
        default:
            return state;
    }
}

//appState = {
//     increment:IncrementReducer
// }
//create reducer configuration object

const reducerConfig = {
    increment: IncrementReducer,
    decrement: DecrementReducer,
    incrementByAmount: IncrementByAmountReducer
};
const rootReducer = combineReducers(reducerConfig)
//create store object 
const appStore = createStore(rootReducer);

//components

const IncrementComponent = props => {

    //appstate.reducer.property
    const value = useSelector(state => state.increment.value)
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch({ type: INCREMENT })
    }

    return <div>
        <h1>Increment Component</h1>
        <h1>Value : {value}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

const DecrementComponent = props => {

    //appstate.reducer.property
    const value = useSelector(state => state.decrement.value)
    const dispatch = useDispatch();

    return <div>
        <h1>Increment Component</h1>
        <h1>Value : {value}</h1>
        <button onClick={() => {
            dispatch({ type: DECREMENT })
        }}>-</button>
    </div>
}

const IncrementByAmountComponent = props => {

    //appstate.reducer.property
    const value = useSelector(state => state.incrementByAmount.value)
    const dispatch = useDispatch();

    return <div>
        <h1>Increment Component</h1>
        <h1>Value : {value}</h1>
        <button onClick={() => {
            dispatch({ type: INCREMENTBYAMOUNT, payload: 100 })
        }}>IncrementByAmount</button>
    </div>
}
const Counter = props => {
    return <>
        <IncrementComponent />
        <DecrementComponent />
        <IncrementByAmountComponent/>
    </>
}

const App = () => <>
    <Provider store={appStore}>
        <Counter />
    </Provider>
</>

ReactDOM.render(<App />, document.getElementById('root'))