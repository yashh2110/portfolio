import React, { useEffect } from 'react'
import Loader from './components/Loader'
import Main from "./components/Main";
import "./css/app.css";
import Nav from './components/Nav';
import Social from './components/Social';
function App() {
    useEffect(()=>{
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
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
