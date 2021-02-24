import React from 'react'
import "../css/nav.css";
import home from "../images/home.svg"
import me from "../images/me.svg"
import skills from "../images/skills.svg"
import proj from "../images/proj.svg"
import logo from "../images/mylogo-white.svg"
import {Link,animateScroll as scroll} from "react-scroll"
function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><a onClick={()=>scroll.scrollToTop()}><img src={home} alt="home" /> </a> </li>
                {/* <li><Link to="about" smooth={true} duration={800}><img src={me} alt="about" /></Link></li>
                <li><Link to="skills" smooth={true} duration={1000}><img src={skills} alt="home" /></Link></li>
                <li><Link to="skill"><img src={proj} alt="home" /></Link></li> */}
                {/* <li><img src={home} alt="home" /></li> */}
                {/* <li>Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li> */}
            </ul>
            <img className="logo" src={logo} alt="logo"/>
        </div>
    )
}

export default Nav
