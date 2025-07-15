import "../ui/footer.css"
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

export const Footer = () => {
    return (
        <div className="container">
            <div className="bottom-section">
                <div className="left-box">
                    <div className="footer-title">
                        <h2>NIRAJ</h2>
                        <div className="footer-img"><img src="/image/Niraj.jpeg" alt="niraj" /></div>
                    </div>
                    <Link to="contact"><button className="bottom-btn" id="contact">CONTACT US</button></Link>
                </div>
                <div className="right-box">
                    <ul className="nav-links">
                        <li><Link activeClass="active" to="home" spy={true}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true}>About Me</Link></li>
                        <li><Link activeClass="active" to="skills" spy={true}>Skills</Link></li>
                        <li><Link activeClass="active" to="project" spy={true}>Projects</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true}>Contact</Link></li>
                    </ul>
                    <div className="social-links">
                        <span><a href="https://www.instagram.com/niraj21_/?igsh=ZGUzMzM3NWJiOQ%3D%3D#" target="_blank"><FaInstagramSquare /></a></span>
                        <span><FaFacebook /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}