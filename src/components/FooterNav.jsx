import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FooterNav.css';
import logo from '../assets/logo.png.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 400);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="cont-nav">
                <div className="icon">
                    <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                </div>
                <div className="logos">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="btn-nom">
                    <button>Call Us: +10 783 346 4378</button>
                </div>
                <div className="burgerMenu" onClick={toggleMenu}>
                    <button>
                        <span>MENU</span>
                        <FontAwesomeIcon icon={faBars} className="fa-icon" />
                    </button>
                </div>
            </div>

            <div className={`container ${isOpen ? 'show-menu' : ''}`}>
                <ul className={`nav-menu ${isOpen ? 'show' : ''}`}>
                    <li className="nav-item navi">
                        <Link to="/" className="nav-link">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item navi">
                        <Link to="/Cakes" className="nav-link">
                            CAKES
                        </Link>
                    </li>
                    <li className="nav-item navi">
                        <Link to="/About" className="nav-link">
                            ABOUT
                        </Link>
                    </li>
                    <li
                        className="nav-item dropdown"
                        onMouseEnter={toggleMenu}
                        onMouseLeave={toggleMenu}
                    >
                        <Link to="/blog" className="nav-link nav-ab">
                            BLOG
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/blog" className="dropdown-link">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/BlogDetails" className="dropdown-link">
                                    Blog Details
                                </Link>
                            </li>
                            <li>
                                <Link to="/Elements" className="dropdown-link">
                                    Elements
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item navi">
                        <Link to="/contact" className="nav-link">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default FooterNav;