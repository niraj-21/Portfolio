import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import '../ui/navbar.css';

export const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="header-container">
            <div>
                <span className='logo'>Niraj</span>
            </div>
            <div className={ show ? "response" : "desktop"}>
                <nav>
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true}>About Me</Link></li>
                        <li><Link activeClass="active" to="skills" spy={true}>Skills</Link></li>
                        <li><Link activeClass="active" to="project" spy={true}>Projects</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div onClick={() => setShow(!show)} className="menu">
                <TfiMenu />
            </div>
        </div>
    );
};
