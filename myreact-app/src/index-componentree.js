import React from "react";
import ReactDOM from 'react-dom';

const Link = () => <ul>
    <li><a href="letscreate">Let's Create</a></li>
    <li><a href="products">Products and Solutions</a></li>
    <li><a href="consulting">Consulting & Services</a></li>
    <li><a href="support">Learn & Support</a></li>
</ul>

const MenuBar = () => <nav>
        <Link/>
</nav>

//Header
const Header = () => <header>
    <h1>IBM -header</h1>
    <hr />
    <MenuBar />
</header>
//Body
const Body = () => <div>
    <p>
        International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries. The company began in 1911, founded in Endicott, New York, by trust businessman Charles Ranlett Flint, as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924. IBM is incorporated in New York
    </p>
</div>

//Footer 
const Footer = () => <header>
    <h1>IBM-Footer</h1>
</header>
//Page

//component linking
const Page = () => <div>
    <Header />
    <Body />
    <Footer />
</div>

//Application component
const App = () => <Page />

ReactDOM.render(<App />, document.getElementById('root'))