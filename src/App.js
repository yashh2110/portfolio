import React from 'react'
import Loader from './components/Loader'
import Main from "./components/Main";
import "./css/app.css";
import Nav from './components/Nav';
function App() {
    return (
        <div className="app">
            <Loader/>
            <Nav />
            <Main />   
        </div>
    )
}

export default App
