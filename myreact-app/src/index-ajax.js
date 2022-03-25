import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Component } from 'react';

class Todo extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        //call rest api 
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                //call setState to fill the data
                this.setState(prevState => {
                    return { ...prevState, todos: prevState.todos.concat(todos) }
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return <>
            <h1>Todo App</h1>
            <br />
            <ul className="list-group">
                {this.state.todos.map(todo => (
                    <li key={todo.id}>
                        <span>
                            {todo.id}
                        </span>
                        <span>
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    }
}
const App = () => <div className="container">
    <Todo />
</div>
ReactDOM.render(<App />, document.getElementById('root'))