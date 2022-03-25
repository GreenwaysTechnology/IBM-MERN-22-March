
import React from 'react';
import ReactDOM from 'react-dom'
import TODOS from './mock-todos/todos'

const NumberList = ({ scores }) => {
    //variable pattern
    const listItems = scores.map(item => <li key={item}>{item}</li>)
    return <div>
        <ul>
            {/* {props.scores.map((item) => {
                return <li key={item}>{item}</li>
            })} */}
            {listItems}
        </ul>
    </div>
}

const TodoList = props => <div>
    {props.todos.map(todo => <TodoItem todo={todo} />)}
</div>
const TodoItem = ({ todo }) => <div key={todo.id}>
    <p>id {todo.id}</p>
    <p>title {todo.title}</p>
    <p>Status {todo.completed ? "done" : "not Completed"}</p>
</div>


const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const App = props => <div>
    <NumberList scores={scores} />
    <TodoList todos={TODOS} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))