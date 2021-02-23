import React,{useRef,useEffect} from 'react'
import fb from "../images/fb.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import email from "../images/email.svg"
import insta from "../images/insta.svg"
import telegram from "../images/telegram.svg"
import "../css/social.css"
function Social() {
    return (
        <div className="social">
            <ul>
                <li className="social-item"><a href=""><img src={fb} alt="fb"/></a></li>
                <li className="social-item"><a href=""><img src={github} alt="github"/></a></li>
                <li className="social-item"><a href=""><img src={linkedin} alt="linkedin"/></a></li>
                <li className="social-item"><a href=""><img src={email} alt="email"/></a></li>
                <li className="social-item"><a href=""><img src={telegram} alt="telegram"/></a></li>
                <li className="social-item"><a href=""><img src={insta} alt="insta"/></a></li>
            </ul>
        </div>
    )
}

export default Social
