import { Link } from 'react-router-dom';
import './OurBlogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import item5 from "../assets/blog1.jpg.webp";
import item6 from "../assets/blog2.jpg.webp";




// 








let OurBlogs
    = () => {


        return (
            <div className="h1-blog">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="section-tittle text-center mb-90 d-flex justify-content-between flex-wrap align-items-center bt1">
                                <h2>Our Blogs</h2>
                                <button >
                                    More Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid mt-5 ">
                    <div className="row  ">
                        <div className="col-xl-6 ml-12 ml-12 mt-5 p-3">
                            <div className="single-services mb-30 mr-10">
                                <div className="row no-gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 p-0">
                                        <div className="features-img">
                                            <img className="sekil" src={item5} alt="img" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 p-0">
                                        <div className="features-caption">
                                            <h3>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                                            <Link to="/blog" className="link1">
                                                LEARN MORE

                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-6  mr-12 mr-12 mt-5 p-3">
                            <div className="single-services mb-30 mr-10">
                                <div className="row no-gutters">
                                    <div className="col-xl-6 col-lg-6 col-md-6 p-0">
                                        <div className="features-img">
                                            <img className="sekil" src={item6} alt="img" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 p-0">
                                        <div className="features-caption">
                                            <h3>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>

                                            <Link to="/blog" className="link1">
                                                LEARN MORE

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default OurBlogs;