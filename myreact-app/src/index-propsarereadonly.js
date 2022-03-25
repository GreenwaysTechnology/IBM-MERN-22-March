import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'


const Greeter = props => {
   //mutate; update
   props.name = 'Ram' //side effects
    return <div>
        <h1>Hello {props.name}</h1>
    </div>
}

const App = () => <div>
    <Greeter name="Subramnaian" />
</div>
ReactDOM.render(<App />, document.getElementById('root'))