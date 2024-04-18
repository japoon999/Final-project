import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import logo from '../assets/logo.png.webp';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';



let Footer = () => {




    return (
        <div className='footer-wrapper'>
            <div className='footer-area footer-padding'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12'>
                            <div className='footer-menu d-flex justify-content-between flex-wrap'>
                                <div className='logo'>
                                    <img className="logo" src={logo} alt="logo" />

                                </div>
                                <div>
                                    <nav className="navbars">
                                        <div className="cont-nav">


                                            <div className="burgerMenu">
                                                <button>
                                                    <span>MENU</span>

                                                </button>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <ul className="nav-menu">
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

                                                >
                                                    <Link to="/blog" className="nav-link nav-ab">
                                                        BLOG
                                                    </Link>

                                                </li>
                                                <li className="nav-item navi">
                                                    <Link to="/contact" className="nav-link">
                                                        CONTACT
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-between ct '>
                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-10'>
                            <div className='single-footer-caption mb-50'>
                                <div className='single-footer-caption mb-30'>
                                    <div className='footer-tittle'>
                                        <div className='footer-pera'>
                                            <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <div className='socila mt-50'>
                                        <button className='btn_02'>
                                            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                                            <span>Instagram</span>
                                        </button>
                                        <button className='btn_02'>
                                            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                                            <span>Facebook</span>
                                        </button>
                                        <button className='btn_02'>
                                            <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                                            <span>Twitter</span>
                                        </button>

                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-10'>
                                <div className='single-footer-caption mb-50'>
                                    <div className='footer-tittle'>
                                        <FontAwesomeIcon icon={faLocationArrow} className='img' />
                                        <h4>Location</h4>
                                        <ul className='textUl'><li><p>4736 Poe Lane, HOT <br /> SPRINGS, Montana- <br /> 59845</p></li></ul>
                                    </div>
                                </div>
                            </div>




                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-10 '>
                            <div className='single-footer-caption mb-50'>
                                <div className='footer-tittle'>
                                    <FontAwesomeIcon icon={faPhoneFlip} className='img' />
                                    <h4>Contact</h4>
                                    <ul className='textUl'>
                                        <li><p>913-473-7000</p></li>
                                        <li><p>contact@cakeshop.com</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className='footer-bottom-area'>
                <div className='footer-border'>
                    <div className="row">
                        <div className='col-xl-12 '>
                            <div className='footer-copy-right text-center'>
                                <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    
    )
}

export default Footer;