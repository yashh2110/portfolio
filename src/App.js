import React,{useEffect,useRef} from 'react'
import Loader from './components/Loader'
import Main from "./components/Main";
import gsap from "gsap";
import "./css/app.css";
function App() {
    const curser= useRef(null);
    const curser_ref= useRef(null);
    useEffect(()=>{
        const id_curser=document.getElementById("curser");
        window.addEventListener("mousemove",(e)=>{
            curser.current.style.left=e.clientX + "px";
            curser.current.style.top=e.clientY + "px";
            curser_ref.current.style.left=e.clientX + "px";
            curser_ref.current.style.top=e.clientY + "px";
        })

    })
    return (
        <div className="app">
            <div ref={curser_ref} className="curser_dot"></div>
            <div ref={curser} id="curser" className="curser">
            </div>
            <Loader/>
            <Main />
            
        </div>
    )
}

export default App
