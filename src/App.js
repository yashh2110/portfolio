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
            {/* <div ref={curser_ref} className="curser_dot"></div> */}
            {/* <div ref={curser}  className="curser"> */}
            {/* </div>  */}
        </div>
    )
}

export default App
