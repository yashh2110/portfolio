import React,{useEffect,useRef} from 'react'
import Loader from './components/Loader'
import Main from "./components/Main";
import gsap from "gsap";
import "./css/app.css";
import Nav from './components/Nav';
function App() {
    const curser= useRef(null);
    const curser_ref= useRef(null);
    
    useEffect(() =>{
        window.addEventListener("mousemove",(e)=>{
            curser.current.style.left=e.clientX + "px";
            curser.current.style.top=e.clientY + "px";
            curser_ref.current.style.left=e.clientX + "px";
            curser_ref.current.style.top=e.clientY + "px";
        })
    })
    return (
        <div className="app">
            <Loader/>
            <Nav />
            <Main />   
            <div ref={curser_ref} className="curser_dot"></div>
            <div ref={curser} id="curser" className="curser">
            </div> 
        </div>
    )
}

export default App
