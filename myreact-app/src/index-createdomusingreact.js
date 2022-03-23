//dom element using react.
import React from 'react'
import ReactDOM from 'react-dom'

//  let Heading = document.createElement('h1')
const Heading = <h1>Hello React!!</h1>

//get element where you want to attach.
const rootElement = document.getElementById('root')

ReactDOM.render(Heading,rootElement)
