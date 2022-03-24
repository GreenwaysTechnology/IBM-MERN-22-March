import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'


class Profile extends React.Component {
    render() {
        console.log(this.props)
        return <div>
            <h1>id  {this.props.id}</h1>
            <h1>First Name  {this.props.firstName}</h1>
            <h1>LastName {this.props.lastName}</h1>
        </div>
    }
}


const App = () => {
    return <Profile id={100} firstName="Subramanian" middleName="" lastName="Murugan" />
}


ReactDOM.render(<App />, document.getElementById('root'))