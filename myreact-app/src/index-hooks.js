import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    state = {
        value: 0
    }
    onIncrement = evt => {
        this.setState(prevState => ({ ...prevState, value: prevState.value + 1 }))
    }
    render() {
        return <div>
            <h1>Value : {this.state.value}</h1>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

const MyCounter = props => {
    const [value, setValue] = useState(0)
    //listener 
    const onIncrement = () => {
        setValue(oldValue => oldValue + 1)
    }
    return <div>
        <h1>Value : {value}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}


const Todos = props => {
    const [todos, setTodos] = useState([])
    //useEffect - componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(newtodos => {
                setTodos(todos => todos.concat(newtodos))
            })
            .catch(err => console.log(err))
    }, [])
    return <div><h1>Todo App</h1>
        <br />
        <ul className="list-group">
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.id}
                    </span>
                    <span>
                        {todo.title}
                    </span>
                </li>
            ))}
        </ul></div>
}

const App = props => <div>
    <h1>Class Component</h1>
    <Counter />
    <hr />
    <h1>Functonal Component-Hook</h1>
    <MyCounter />
    <h1>Functonal Component-useHook</h1>
    <Todos />
</div>

ReactDOM.render(<App />, document.getElementById('root'))