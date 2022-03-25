import React from 'react';
import ReactDOM from 'react-dom'

//without spread
// const ProfileMaster = props => {
//     return <ProfileDetails
//         id={props.id}
//         name={props.name}
//         status={props.status}
//         city={props.city} />
// }
const ProfileMaster = props => {
    //rethrow the properties to the child compompoent
    return <ProfileDetails {...props} title="Profile Details" />
}

const ProfileDetails = props => {

    return <div>
        <h1>{props.title}</h1>
        <h1>id {props.id}</h1>
        <h1>Name {props.name}</h1>
        <h1>City {props.city}</h1>
        <h1>Status {props.status ? "available" : "Not Available"}</h1>
    </div>

}

// In the above code , we pass property to child component after reteriving manually ,This makes your code so complex
const App = props => {
    return <div>
        <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))