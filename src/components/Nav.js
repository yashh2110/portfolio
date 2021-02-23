import React from 'react'
import "../css/nav.css";
import home from "../images/home.svg"
import me from "../images/me.svg"
import skills from "../images/skills.svg"
import proj from "../images/proj.svg"
function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><a><img src={home} alt="home" /> </a> </li>
                <li><a><img src={me} alt="home" /></a></li>
                <li><a><img src={skills} alt="home" /></a></li>
                <li><a><img src={proj} alt="home" /></a></li>
                {/* <li><img src={home} alt="home" /></li> */}
                {/* <li>Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li> */}
            </ul>
        </div>
    )
}

export default Nav
