import React,{useRef,useEffect,useState} from 'react';
import "../css/main.css";
import background from "../images/background.svg"
function Main() {
    const [x,setX]=useState(0);
    return (
        <div className="main">   
            <button onClick={()=>setX(x+1)}>{x}</button>
        </div>
    )
}

export default Main
