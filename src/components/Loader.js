import React,{useRef,useEffect} from 'react'
import "../css/loader.css"
import loader_img from "../images/richie.svg";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
function Loader() {
    const loader_ref= useRef(null);
    const loader_window1= useRef(null);
    const loader_window2= useRef(null);
    const loader_window3= useRef(null);
    const loader_img_ref= useRef(null);
    const hello_txt_ref= useRef(null);
    const name_txt_ref= useRef(null);
    const welcome_txt_ref= useRef(null);
    useEffect(()=>{
        const tl =gsap.timeline({ease:"power3"});
        tl.from(loader_img_ref.current,{
            x:window.innerWidth * -1,
            ease:"back",
            duration:2
        });
        tl.from(hello_txt_ref.current,{
            opacity:0
        })
        tl.to(hello_txt_ref.current,{
            opacity:0
        },"+=1")
        tl.from(name_txt_ref.current,{
            scale:0
        })
        tl.to(name_txt_ref.current,{
            opacity:0
        },"+=1")
        tl.from(welcome_txt_ref.current,{
            x:window.innerWidth * 1,
            ease:"bounce",
            duration:3
        },"-=0.5")
        tl.to(welcome_txt_ref.current,{
            x:window.innerWidth * -1,
        },"+=1")
        tl.to(loader_img_ref.current,{
            opacity:0
        });
        tl.to(loader_window1.current,{
            y:window.innerHeight * -1,
            duration:2
        },"-=0.5");
        tl.to(loader_window2.current,{
            y:window.innerHeight * -1,
            duration:2
        },"-=1.5");
        tl.to(loader_window3.current,{
            y:window.innerHeight * -1,
            duration:2
        },"-=1.5");
        tl.to(loader_ref.current,{
            y:window.innerHeight * -1,
            duration:2
        },"-=0.5");
    },[])
    return (
        <div ref={loader_ref} className="loader">
            <div ref={loader_window1} className="loader_window"></div>
            <div ref={loader_window2} className="loader_window"></div>
            <div ref={loader_window3} className="loader_window"></div>
            <p ref={hello_txt_ref} className="hello_txt">Hello There</p>
            <p ref={name_txt_ref} className="hello_txt">I Am Yashwanth Muddana</p>
            <p ref={welcome_txt_ref} className="hello_txt">Lets Gooooo.....</p>
            <img className="loader_img" ref={loader_img_ref} src={loader_img} alt="hello there"/>
        </div>
    )
}

export default Loader
