import { createStore } from "redux";
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { useSelector, Provider, useDispatch } from "react-redux";


//action constants
const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const INCREMENTBYAMOUNT = 'counter/incrementByAmount'

//pure function ; reducer; having data and biz logic.

const CounterReducer = (state = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case INCREMENT:
            //immutable
            return { ...state, value: state.value + 1 }
        case DECREMENT:
            //immutable
            return { ...state, value: state.value - 1 }
        case INCREMENTBYAMOUNT:
            //immutable
            return { ...state, value: state.value + action.payload }
        default:
            return state;
    }
}
//create store object 
const appStore = createStore(CounterReducer);

//component

const Counter = props => {
    //read Redux store value
    const value = useSelector(state => state.value)
    const [text, setText] = useState('')
    // const increment = useDispatch();
    const dispatch = useDispatch();

    //action creator ; function which returns action object
    // const incrementByAmount = payload => {
    //     return {
    //         type: incrementByAmount,
    //         payload
    //     }
    // }
    const incrementByAmount = payload => ({ type: INCREMENTBYAMOUNT, payload })

    const onIncrement = () => {
        //send an action(request) to redux
        // increment({ type: 'counter/increment' })
        dispatch({ type: DECREMENT })
    }
    return <div>
        <h1>React Redux -App</h1>
        <h1>Value {value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: DECREMENT })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: INCREMENTBYAMOUNT, payload: 10 })
        }}>IncrementByAmount</button>
        <div>
            <input onChange={(evt) => {
                setText(parseInt(evt.target.value))
            }} />
            <button onClick={() => {
                dispatch(incrementByAmount(text))
            }}>IncrementByAmountWithActionCreator</button>
        </div>
    </div>
}

const App = () => <>
    <Provider store={appStore}>
        <Counter />
    </Provider>
</>

ReactDOM.render(<App />, document.getElementById('root'))