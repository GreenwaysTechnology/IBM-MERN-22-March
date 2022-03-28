import { createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom'
import { useSelector, Provider, useDispatch } from "react-redux";


//pure function ; reducer; having data and biz logic.

const CounterReducer = (state = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            //immutable
            return { ...state, value: state.value + 1 }
        case 'counter/decrement':
            //immutable
            return { ...state, value: state.value - 1 }

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
    // const increment = useDispatch();
    const dispatch = useDispatch();

    const onIncrement = () => {
        //send an action(request) to redux
        // increment({ type: 'counter/increment' })
        dispatch({ type: 'counter/increment' })
    }
    return <div>
        <h1>React Redux -App</h1>
        <h1>Value {value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>

    </div>
}

const App = () => <>
    <Provider store={appStore}>
        <Counter />
    </Provider>
</>

ReactDOM.render(<App />, document.getElementById('root'))