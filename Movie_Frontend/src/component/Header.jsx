import { Link } from "react-router-dom";
import "../style/global_style.css";
import { useEffect, useState } from "react";
const Header=()=>{
    const [showHeader,setShowHeader]=useState(true);
    const [lastScrollY,setLastScrollY]=useState(0);
    const controlHeader=()=>{
        if(window.scrollY>lastScrollY){
            setShowHeader(false)
        }else{
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener("scroll",controlHeader);
        return ()=> window.removeEventListener("scroll",controlHeader);
    },[lastScrollY])
    return (
        <>
           <nav className={`nav-bar ${showHeader ? "show" : "hide"}`} >
                <h1 className="nav-logo">MovieS</h1>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
           </nav>
        </>
    )
}
export default Header;