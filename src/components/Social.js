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
                <li className="social-item"><a href="https://github.com/yashh2110"><img src={github} alt="github"/></a></li>
                <li className="social-item"><a href="https://www.linkedin.com/in/yashwanth2110/"><img src={linkedin} alt="linkedin"/></a></li>
                <li className="social-item"><a href="mailto:muddana.yashwanth@gmail.com"><img src={email} alt="email"/></a></li>
                <li className="social-item"><a href="https://t.me/joinchat/r4rMyGThnOk2OWZl"><img src={telegram} alt="telegram"/></a></li>
                <li className="social-item"><a href="https://www.instagram.com/yashh2110/"><img src={insta} alt="insta"/></a></li>
            </ul>
        </div>
    )
}

export default Social
