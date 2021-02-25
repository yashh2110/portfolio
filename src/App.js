import React from 'react'
import Loader from './components/Loader'
import Main from "./components/Main";
import "./css/app.css";
import Nav from './components/Nav';
import Social from './components/Social';
function App() {
    return (
        <div className="app">
            <Loader/>
            <Nav />
            <Main />  
            <Social />

        </div>
    )
}

export default App
