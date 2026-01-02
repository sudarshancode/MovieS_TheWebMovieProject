import { Link } from "react-router-dom";
import "../style/global_style.css";
const Header=()=>{
    return (
        <>
           <nav className="nav-bar" >
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