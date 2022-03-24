import React from 'react'
import { MenuBar } from '../menus/menubar'

const headerStyle = {
    color: 'red'
};

const Header = () => <header className="App-header">
    <h1 style={headerStyle}>IBM -header</h1>
    <hr />
    <MenuBar />
</header >

export { Header }