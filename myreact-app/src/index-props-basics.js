import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
//in order to understand props pattern , you know the how functions are working 
//args
function add(a, b) {
    return a + b;
}
console.log(add(10, 10)) //parameter

//props = {name:'Subramanian',message:'Hai'}
// function Greeter(props) {
//     console.log(props)
//     return <div>
//         <h1>{props.message} {props.name}</h1>
//     </div>
// }
const Greeter = props => <div>
    <h1>{props.message} {props.name}</h1>
</div>

const Profile = props => <div className="container">
    <h1>Profile Details</h1>
    <h3>id {props.id}</h3>
    <h4>Name {props.name}</h4>
    <h4>Status {props.status ? "Avilable" : "Not Available"}</h4>
    <address>
        {props.address.city} {props.address.state}
    </address>
</div>

function App() {
    // return Greeter('Subramanian');
    let myname = 'Ram';
    // return <Greeter name="Subramanian" message="Hai" />
    return <div>
        <Greeter name={myname} message="Hai" />
        <Profile id={1} name="Subramanian"
            status={true}
            address={{ city: 'Coimbatore', state: 'Tamil Nadu' }} />
        <Profile id={1} name="Subramanian"
            status={true}
            address={{ city: 'Coimbatore', state: 'Tamil Nadu' }} /><Profile id={1} name="Subramanian"
                status={true}
                address={{ city: 'Coimbatore', state: 'Tamil Nadu' }} />
    </div>

}

ReactDOM.render(<App />, document.getElementById('root'))

