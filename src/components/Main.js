import React,{useRef,useEffect} from 'react';
import "../css/main.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import background from "../images/background.svg"
import prof from "../images/prof.svg"
function Main() {
    const iam_txt1= useRef(null);
    const iam_txt2= useRef(null);
    const iam_txt3= useRef(null);
    useEffect(()=>{
        const tl =gsap.timeline({repeat:-1,delay:12});
        const screen = window.matchMedia('screen and (max-width:768px)');
        if(screen.matches){
            tl.fromTo(iam_txt1.current,3,{width:0},{width:"266.75",display:"initial"});
            tl.fromTo(iam_txt1.current,3,{width:"266.75"},{width:"0",display:"none"},"+=2");
            tl.fromTo(iam_txt2.current,2,{width:0},{width:"112.08",display:"initial"});
            tl.fromTo(iam_txt2.current,2,{width:"112.08"},{width:"0",display:"none"},"+=2");
            tl.fromTo(iam_txt3.current,1.5,{width:0},{width:"85.74",display:"initial"});
            tl.fromTo(iam_txt3.current,1.5,{width:"85.74"},{width:"0",display:"none"},"+=2");
        }else{
            tl.fromTo(iam_txt1.current,3,{width:0},{width:"451.25",display:"initial"});
            tl.fromTo(iam_txt1.current,3,{width:"451.25"},{width:"0",display:"none"},"+=2");
            tl.fromTo(iam_txt2.current,2,{width:0},{width:"185.45",display:"initial"});
            tl.fromTo(iam_txt2.current,2,{width:"184.45"},{width:"0",display:"none"},"+=2");
            tl.fromTo(iam_txt3.current,1.5,{width:0},{width:"141.56",display:"initial"});
            tl.fromTo(iam_txt3.current,1.5,{width:"141.56"},{width:"0",display:"none"},"+=2");
        }

    },[])
    return (
        <div className="main">  
            <div className="profile">
                <img src={prof} alt="me"></img>
            </div> 
            <div className="main_info">
                <p>Hello There</p>
                <p>I Am Yashwanth Muddana</p>
                <p>I Am A 
                    <span ref={iam_txt1} className="iam_txt1">Full Stack Web Developer</span>
                    <span ref={iam_txt2} className="iam_txt1">Freelancer</span>
                    <span ref={iam_txt3} className="iam_txt1">Student</span>
                </p>
            </div>

        </div>
    )
}

export default Main
