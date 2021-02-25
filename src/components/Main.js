import React,{useRef,useEffect} from 'react';
import "../css/main.css";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from "gsap/TextPlugin";
import html from "../images/html.svg"
import css from "../images/css.svg"
import js from "../images/js.svg"
import bootstrap from "../images/bootstrap.svg"
import mui from "../images/mui.svg"
import react from "../images/react.svg"
import node from "../images/node.svg"
import express from "../images/express.svg"
import mdb from "../images/mdb.svg"
import php from "../images/php.svg"
import sql from "../images/sql.svg"
import python from "../images/python.svg"
import prof from "../images/prof.svg"
import down from "../images/down.svg"
import mail from "../images/mail.svg"
import call from "../images/call.svg"
import Tilt from 'react-parallax-tilt';
// import Skills from './skills';
function Main() {


    
    useEffect(()=>{
        const screen = window.matchMedia('screen and (max-width:1024px)');
        // plugins
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        // main txt word array
        const words =[" Full Stack Web Developer."," UI/UX Designer."," Freelancer."," Student."];
        gsap.to('.blinker',{opacity:0,duration:0.8,repeat:-1})
        const texttl = gsap.timeline({repeat:-1,delay:10});
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
                    end:"bottom -200px"
                },
            })    

            // if(screen.matches){
            //     s_tl.to(".profile",{opacity:0,duration:2,ease:"linear"},"-=1");
            // }else{
            // }
            // // s_tl.to(".main",{background:"#333",duration:2,ease:"linear"},"-=1")
            if(screen.matches){
                // s_tl.from(".about",{y:(window.innerHeight* 1),duration:5,ease:"linear"})
                // s_tl.to(".home",{y:-(window.innerHeight* 1),opacity:0,duration:6,ease:"linear"},"-=5")
                // s_tl.from(".skills",{y:window.innerHeight * 1,duration:7,ease:"linear"},"-=1")
                // s_tl.to(".about",{y:-(window.innerHeight* 1),opacity:0,duration:8,ease:"linear"},"-=7")
                // s_tl.to(".skills",{y:-(window.innerHeight * 1),duration:8,ease:"linear"},"-=1")                
                // s_tl.fromTo(".contact",{y:window.innerHeight * 1},{y:-(100-vh),duration:7,ease:"linear"},"-=1")
            }else{
                s_tl.to('.scroll-indicator',{opacity:0})
                s_tl.to(".main_info",{x:window.innerWidth * -1,duration:2,ease:"linear"})
                s_tl.to(".profile",{x:-(window.innerWidth-600),duration:5,ease:"linear"},"-=1");
                s_tl.from(".about",{x:(window.innerWidth * 1),duration:2,ease:"linear"},"-=1")
                // s_tl.from(".about_head",{width:100,opacity:0,duration:5,ease:"linear"},"-=1")
                // s_tl.from(".about_txt",{x:window.innerWidth * 1,opacity:5,duration:6,ease:"linear"})
                s_tl.from(".skills",{y:window.innerHeight * 1,duration:7,ease:"linear"},"+=1.5")
                s_tl.to(".about",{y:-(window.innerHeight * 1),duration:5,ease:"linear"},"-=5")
                s_tl.to(".profile",{y:-(window.innerHeight * 1),duration:6.5,ease:"linear"},"-=7")
                s_tl.from(".skill_item",{opacity:0,stagger:0.4,duration:6.5,ease:"power2"},"-=6")
                s_tl.to(".skills",{y:-(window.innerHeight),duration:10,ease:"linear"},'-=5')
                s_tl.from(".contact",{y:window.innerHeight * 1,duration:7,ease:"linear"},"-=10")
            }
        },7000)

    },[])
    return (
        <div className="main" > 
            <div className="home">
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
            
            <div className="scroll-indicator">
                {/* <div className="scroll_dot"></div> */}
                <img src={down} className="scroll_ind_sec" alt="scroll"/>
                <img src={down} className="scroll_ind_main" alt="scroll"/>
            </div>

            </div>
            <div className="about" >
                <p className="about_head">About Me</p>
                <p className="about_txt" id="about">Hi, I am Yashwanth Muddana, I am a full stack web developer, UI/UX designer, and a freelancer, I am enthusiastic towards growing technologies, I am very happy to connect the bridge between people by making businesses online. I am highly experienced in designing websites and developing them, I am looking forward to work with any who makes the day to day life better. I am learning app development and I am very much intrested in artificial intelligence. I am a 2nd year student at VIT University Vellore India. </p>
            </div>
            <div className="skills" id="skills">
                <p className="skill_head">Skills</p>
                <div className="skill_items" >
                    <Tilt className="skill_item  "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={html} alt="html"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={css} alt="css"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={js} alt="js"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={bootstrap} alt="bootstrap"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={mui} alt="mui"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={react} alt="react"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={node} alt="node"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={express} alt="express"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={mdb} alt="mdb"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={php} alt="php"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={sql} alt="sql"/>
                    </Tilt>
                    <Tilt className="skill_item "     
                    tiltMaxAngleX={30}
                    tiltMaxAngleY={30}
                    perspective={800}
                    transitionSpeed={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    >
                        <img src={python} alt="python"/>
                    </Tilt>
                </div>
            </div>
            <div className="contact">
                <p className="contact_head">Contact Me</p>
                <p className="contact_txt">Want to make your bussiness online with website? Yeah Your on the right place. I can build your ideas into a perfect website with reasonable price. Your satisfaction is my priority. You can contact me through these below. </p>
                <div className="contact_items">
                <a href="mailto:muddana.yashwanth@gmail.com"><Tilt className="contact_item" glareEnable={true} glareMaxOpacity={0.45}  perspective={1000} >
                    <img src={mail} alt="gmail"/>
                    <p>muddana.yashwanth@gmail.com</p>
                </Tilt>
                </a>
                <a href="tel:9347451840"><Tilt className="contact_item" glareEnable={true} glareMaxOpacity={0.45}  perspective={1000} >
                    <img src={call} alt="gmail"/>
                    <p>9347451840</p>
                </Tilt></a>
                </div>


            </div>
        </div>
    )
}

export default Main
