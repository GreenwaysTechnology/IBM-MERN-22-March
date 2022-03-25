import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component {

    //state initalization
    state = {
        value: 0 //inital value 
    }
    //event listener
    onIncrement = () => {
        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }

    render() {
        //state as prop and listener as prop
        return <CounterDisplay {...this.state} onIncrement={this.onIncrement} />
    }

}
const CounterDisplay = props => <div>
    <h1>Counter Component - State</h1>
    <h3>Value {props.value}</h3>
    <button onClick={props.onIncrement}>+</button>
</div>


const App = () => <Counter />

ReactDOM.render(<App />, document.getElementById('root'))