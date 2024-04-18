import './Lover.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import item4 from "../assets/customer1.png.webp";








let Lover
    = () => {
        return (
            <section className="customer-section section-padding">
            <div className="container-xxl">


                <div className="row justify-content-center ">

                    <div className="col-xl-6 col-lg-7 col-md-7 ">
                        <div className="section-tittle  text-center mb-50">
                            <h2>Food Lover's Say</h2>
                        </div>

                    </div>


                    <div className="row justify-content-center pt-5  " >

                        <div className="col-lg-3 col-md-4 col-sm-6 p-0  ">
                            <div className="single-cat mb-30">

                                <div className="cat-cap">
                                    <div className="rating">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                        </ul>
                                    </div>
                                    <p>"Consectetur adipiscing elit, <br /> sed do eiusmod tempor dunt <br /> ulter labore et dolore magna.</p>
                                </div>
                                <div className="cat-img ">
                                    <img className="sekil" src={item4} alt="img" />
                                    <p>Wilma Mumduya</p>
                                </div>
                            </div>
                        </div>








                        <div className="col-lg-3 col-md-4 col-sm-6 p-0  ">
                            <div className="single-cat mb-30">
                                <div className="cat-cap">
                                    <div className="rating ">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                        </ul>
                                    </div>
                                    <p>"Consectetur adipiscing elit, <br /> sed do eiusmod tempor dunt <br /> ulter labore et dolore magna.</p>
                                </div>
                                <div className="cat-img">
                                    <img className="sekil" src={item4} alt="img" />
                                    <p>Wilma Mumduya</p>
                                </div>
                            </div>
                        </div>








                        <div className="col-lg-3 col-md-4 col-sm-6 p-0  ">
                            <div className="single-cat mb-30">
                                <div className="cat-cap">
                                    <div className="rating">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                            <li><FontAwesomeIcon icon={faStar} className="star" />    </li>
                                        </ul>
                                    </div>
                                    <p>"Consectetur adipiscing elit, <br /> sed do eiusmod tempor dunt <br /> ulter labore et dolore magna.</p>
                                </div>
                                <div className="cat-img">
                                    <img className="sekil" src={item4} alt="img" />
                                    <p>Wilma Mumduya</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </section>
        )
    }

export default Lover;