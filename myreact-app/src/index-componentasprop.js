import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';


const Wrapper = props => <div>
    {props.children}
</div>

const Button = () => <button>Click</button>
const Logo = props => <div>{props.children}</div>

const App = () => <div>
    <Wrapper >
        {/* Button as prop */}
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Logo>
            {/* img src as props */}
            <img src={logo} />
        </Logo>

    </Wrapper>
</div>

ReactDOM.render(<App />, document.getElementById('root'))