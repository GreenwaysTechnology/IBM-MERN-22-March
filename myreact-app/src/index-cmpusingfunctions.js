import React from 'react';
import ReactDOM from 'react-dom'

//create Component - functions Pattern
//es 5 style of declaring functions
// function Header() {
//     return <nav>
//         <h1>IBM</h1>
//     </nav>
// }
// const Header = () => {
//     return <nav>
//         <h1>IBM</h1>
//     </nav>
// }
const Header = () => <nav>
    <h1>IBM</h1>
</nav>

//calling function is impertive style
// ReactDOM.render(Header(), document.getElementById('root'))
ReactDOM.render(<Header></Header>, document.getElementById('root'))



