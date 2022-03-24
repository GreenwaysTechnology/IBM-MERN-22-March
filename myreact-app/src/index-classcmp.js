import React from 'react';
import ReactDOM from 'react-dom'


class Header extends React.Component {
    
    render(){
        return <nav>
            <h1>IBM !!</h1>
        </nav>
    }
}


ReactDOM.render(<Header></Header>, document.getElementById('root'))



