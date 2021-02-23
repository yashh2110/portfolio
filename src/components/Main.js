import React,{useRef,useEffect} from 'react';
import "../css/main.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from "gsap/TextPlugin";
import prof from "../images/prof.svg"
import Social from './Social';
function Main() {

    const curser= useRef(null);
    const curser_ref= useRef(null);
    
    useEffect(()=>{
        const screen = window.matchMedia('screen and (max-width:768px)');
        // plugins
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);
        // curser
        window.addEventListener("mousemove",(e)=>{
            curser.current.style.left=e.clientX + "px";
            curser.current.style.top=e.clientY + "px";
            curser_ref.current.style.left=e.clientX + "px";
            curser_ref.current.style.top=e.clientY + "px";
        })
        // main txt word array
        const words =[" Full Stack Web Developer."," UI/UX Designer."," Freelancer."," Student."];
        gsap.to('.blinker',{opacity:0,duration:0.8,repeat:-1})
        const texttl = gsap.timeline({repeat:-1,delay:12});
        // gsap.from('.profile',{opacity:0,x: window.innerWidth * 1,scale:0,duration:2,ease:"back",delay:12})
        words.forEach(word=>{
            let tl = gsap.timeline({repeat:1,yoyo:true,repeatDelay:2});
            tl.to('.iam_txt',{duration:2.3,text: word})
            texttl.add(tl)
        });
        // scrolltrigger begins

        setTimeout(()=>{
            const s_tl= gsap.timeline({
                scrollTrigger:{
                    trigger:".main",
                    start:"top top",
                    scrub:1,
                    pin:true,
                    end:"bottom top"
                },
            })
            s_tl.to(".main_info",{x:window.innerWidth * -1,duration:2,ease:"linear"})
            s_tl.to(".profile",{x:-(window.innerWidth-600),duration:2,ease:"linear"},"-=1")
        },12000)

    },[])
    return (
        <div className="main"> 
            <div ref={curser_ref} className="curser_dot"></div>
            <div ref={curser} id="curser" className="curser">
            </div> 
            <div className="profile">
                <img src={prof} alt="me"></img>
            </div> 
            <div className="main_info">
                <p>Hello There</p>
                <p>I Am Yashwanth Muddana</p>
                <p>I Am A  
                    <span className="iam_txt"></span>
                    <span className="blinker">_</span>
                </p>
            </div>
            <div className="about">

            </div>
            <Social />
        </div>
    )
}

export default Main
