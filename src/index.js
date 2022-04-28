import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style/index.css'
import Home from './Pages/Home'
import Decals from './Pages/Decals'
import About from './Pages/About'

function Index() {
    return (
        <Decals />
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))