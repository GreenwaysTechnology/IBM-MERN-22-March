/**
 * state - data
 * encapsulated inside component
 * component can change data
 * when data is chanaged, page is re rendered with new values.
 * how to change data ? via events
 * state introduced inside class Component only but we can introduce inside functions also
 */
import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component {

    //state initalization
    state = {
        value: 0 //inital value 
    }
    //event listener
    onIncrement = () => {
        // this.setState(function (prevState) {
        //     console.log("Previous state", prevState)
        //     // return {
        //     //     value: prevState.value + 1
        //     // }  //current state ///updated state
        //     // return Object.assign({}, prevState, { value: prevState.value + 1 })
        //     return { ...prevState, value: prevState.value + 1 }
        // })

        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }

    render() {
        console.log('inside render', this.state)
        return <div>
            <h1>Counter Component - State</h1>
            <h3>Value {this.state.value}</h3>
            <button onClick={this.onIncrement}>+</button>
            {/* inline listner */}
            <button onClick={() => {
                this.setState(prevState => ({ ...prevState, value: prevState.value - 1 }))
            }}>-</button>

        </div>
    }
}

const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'))