import Nav from "../Navbar/Nav";
import './Contact.css';
import item9 from "../assets/h2_hero1.jpg.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser,faTabletScreenButton ,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footers/Footer"
let Contact = () => {

    
    const handleFocus = (event) => {
        event.target.placeholder = '';
        event.target.style.color = '#ff0000'; 
    };
    
    const handleBlur = (event) => {
        event.target.placeholder = 'Enter Message';
        event.target.style.color = '#545454'; 
    };
    

    return (
        <div className="boxs">
            <div>
                <Nav />
            </div>

            <div className="slider-area">
                <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                    <img className="item9" src={item9} alt="item9" />
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-xxl-12">
                                <div className="hero-caption hero-caption2">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="contact-section">
                <div className="container ">
                    <div className="d-none d-sm-block mb-5 pb-4 ">
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8596.311944680127!2d49.90046193510249!3d40.38103546161307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd71e79ef29%3A0x3538df27b1677d02!2zQXrJmXJOZWZ0WWHEnyBtZXRybyBzdGFuc2l5YXPEsQ!5e0!3m2!1str!2saz!4v1712563584302!5m2!1str!2saz"
                                width="600" height="480"
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Responsive Google Map"></iframe>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>

                        <div className="col-lg-8">
                            <form className="form-contact contact_form"
                                action="contact_process.php"
                                method="post"
                                id="contactForm"
                                noValidate="novalidate"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={handleFocus} onBlur={handleBlur} placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" onFocus={handleFocus} onBlur={handleBlur} placeholder="Enter your name"></input>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email" onFocus={handleFocus} onBlur={handleBlur} placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Enter Subject"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm btn_1">Send</button>
                                </div>
                            </form>
                        </div>


                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <div className="contact-info__icon">
                                <FontAwesomeIcon icon={faHouseChimneyUser} className="ti-home" />
                                </div>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <div className="contact-info__icon">
                                <FontAwesomeIcon icon={faTabletScreenButton} className="ti-tablet" />
                                </div>
                                <div className="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <div className="contact-info__icon">
                                <FontAwesomeIcon icon={faEnvelope} className="ti-email" />
                                </div>
                                <div className="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div>
                        <Footer/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
