import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import '../ui/contact.css'

export const Contact = () => {
    return (
        <div id="contact">
            <div className="heading">
                <h1>Contact</h1>
                <div className="line"></div>
            </div>
            <div className='contact-container'>
                <div className="contact-info">
                    <div id="contact-heading">
                        <span>Contact Information</span>
                        <span>if you have any questions,feel free to get in touch with us</span>
                    </div>
                    <div id="contact-detail">
                        <span><FaPhoneAlt />  +91 9920267622</span>
                        <span><MdEmail />  nirajmallah210@gmail.com</span>
                        <span><FaLocationDot />  Vinayak Nagar, Teen Dongri, Goregaon (W), MUM - 400 104</span>
                    </div>
                    <div id="contact-time">
                        <span>Monday-Friday</span>
                        <span><MdOutlineAccessTimeFilled />9:00am-6:00pm</span>
                    </div>
                    <div id="contact-logo">
                        <FaFacebook /><a href="https://www.instagram.com/niraj21_/?igsh=ZGUzMzM3NWJiOQ%3D%3D#" target="_blank"><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className="get-info">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="bbedb4f7-25ac-46c0-8c2b-9707a81e9b7f" />
                        <div>
                            <div className="name-div">
                                <label>First name:</label>
                                <input className="name-input" name="first_name" type="text" placeholder="first name" />
                            </div>
                        </div>
                        <div>
                            <div className="name-div widt">
                                <label>Last name:</label>
                                <input className="name-input" name="last_name" type="text" placeholder="last name" />
                            </div>
                        </div>
                        <div>
                            <div className=" name-div-big get-margin">
                                <label>Email:</label>
                                <input type="email" placeholder="email@example.com" className="name-input" name="email" />
                            </div>
                        </div>
                        <div>
                            <div className="name-div-big get-margin">
                                <label>Phone no:</label>
                                <input type="phone" placeholder="+91 0000000000" className="name-input" name="phone" />
                            </div>
                        </div>
                        <div>
                            <div className="name-div-big get-margin">
                                <label>Message:</label>
                                <textarea placeholder="Your message" className="name-input" name="message" />
                            </div>
                        </div>
                        <div className="btn-end">
                            <button type="submit" className="get-btn">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}