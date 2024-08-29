import React from 'react'
import '../../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from '../../Images/logo-light.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bgfooter text-light">
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15 pr-md-15">
                        <div className="about">
                            <img className="logo" src={logo} />
                            <p>
                            Uukow Advertisement Company, where we craft compelling narratives and dynamic strategies to elevate your business in the digital realm. As a leading social media marketing agency, we specialize in cultivating your online presence and connecting you with your target audience effectively.
                            </p>
                            <ul className="footer-social">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-item">
                        <div className="link">
                            <h4 className="widget-title">Our Services</h4>
                            <ul className='footer_services'>
                                <li>
                                    <Link to="/services">Email Marketing</Link>
                                </li>
                                <li>
                                <Link to="/services">Social Media Marketing</Link>
                                </li>
                                <li>
                                <Link to="/services">Offline SEO</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-item adress-item">
                        <h4 className="widget-title">Official Info</h4>
                        <div className="address">
                            <ul>
                                <li>
                                    <div className="content">
                                        <strong>Address:</strong>
                                        Shaleemo Mogadishu, Wadajir, Mogadishu
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <strong>Email:</strong>
                                        <a href="mailto:info@uukow.com">info@uukow.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <strong>Phone:</strong>
                                        <a href="tel:+252615031623">+252 615 031623</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-item">
                        <h4 className="widget-title">Newsletter</h4>
                        <div className="newsletter">
                            <p>
                                Join our subscribers list to get the latest news and special offers. 
                            </p>
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                <button type="submit"> Subscribe Now <i className="fa fa-paper-plane"></i></button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Footer Bottom --> */}
        <div className="footer-bottom bg-dark-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p>&copy; Copyright 2024. All Rights Reserved by <a href="#">Uukowads</a> <span className='development'>Developed By Abdulkadir Uukow</span></p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <ul>
                            <li>
                            <Link to="/about">Terms</Link>
                            </li>
                            <li>
                            <Link to="/about">Privacy</Link>
                            </li>
                            <li>
                            <Link to="/about">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Footer Bottom --> */}
    </footer>
  )
}

export default Footer
