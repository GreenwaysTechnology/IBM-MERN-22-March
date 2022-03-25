import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

// const Greeter = props => <h1>hello</h1><h2>Hai</h2>

// const Greeter = props => <React.Fragment>
//     <h1>hello</h1><h2>Hai</h2>
// </React.Fragment>
// const Greeter = props => <Fragment>
//     <h1>hello</h1><h2>Hai</h2>
// </Fragment>
const Greeter = props => <>
    <h1>hello</h1><h2>Hai</h2>
</>

const Grid = props => {
    return <table className="table">
        <thead className="thead-dark">
            <Columns  />
        </thead>
        <GridBody users={[{ id: 1, name: 'subramanian', email: 'subu@gmail.com' }]} />
    </table>
}
const Columns = props => {
    return <>
        <th>id</th>
        <th>name</th>
        <th>email</th>
    </>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}

const App = () => <div>
    <Greeter />
    <Grid />
</div>
ReactDOM.render(<App />, document.getElementById('root'))