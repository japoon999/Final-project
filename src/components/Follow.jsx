import './Follow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import instra from "../assets/instra1.jpg.webp";


let Follow
    = () => {
        return (
            <div className='instragram top-padding'>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-xl-6 col-lg-7 col-md-7 '>
                            <div className='section-tittle  text-center mb-70'>
                                <h2>Follow us on Instagram</h2>
                                <button className='btn_02 btn_02s mt-25'>
                                    <FontAwesomeIcon icon={faInstagram} className="fa-icon " />
                                    Cakeshop
                                </button>


                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='instra-img mb-30'>
                                <img className="card-img-top" src={instra} alt="img" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='instra-img mb-30'>
                                <img className="card-img-top" src={instra} alt="img" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='instra-img mb-30'>
                                <img className="card-img-top" src={instra} alt="img" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='instra-img mb-30'>
                                <img className="card-img-top" src={instra} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Follow;