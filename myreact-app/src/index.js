import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import { Counter } from './features/counter/counter'
import { Provider } from 'react-redux'
import store from './app/store'
import { BrowserRouter, Routes, Route,Link,Outlet } from 'react-router-dom';


const Home = () => <h1>IBM-home</h1>
const About = () => <h1>IBM-about</h1>
const Dashboard = () => <h1>IBM-dashboard</h1>
const Transactions = () => <h1>TransactionPage</h1>


const Layout = () => {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/transcations">Transactions</Link>
                    </li>
                    <li>
                        <Link to="/counter">Redux-Counter</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

const App = () => <>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                {/* Parent Route -Master Menu */}
                <Route path="/" element={<Layout />}>
                    {/* Child routes */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transcations" element={<Transactions />} />
                    <Route path="counter" element={<Counter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
</>
ReactDOM.render(<App />, document.getElementById('root'))