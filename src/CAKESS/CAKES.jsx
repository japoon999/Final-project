import Nav from "../Navbar/Nav";
import Follow from "../components/Follow";
import Footer from "../Footers/Footer";
import './CAKES.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import item9 from "../assets/h2_hero1.jpg.webp";
import item1 from "../assets/items1.jpg.webp";
import item2 from "../assets/items2.jpg.webp";
import item3 from "../assets/items3.jpg.webp";

let Cakes
    = () => {
        return (
            <div className="container-fulid">
                <div className="container-fulid" >
                    <Nav />
                </div>


                <div className="slider-area">
                    <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                        <img className="item9" src={item9} alt="item9" />
                        <div className="container">
                            <div className="row justify-content-center ">
                                <div className="col-xxl-12">
                                    <div className="hero-caption hero-caption2">
                                        <h2>Delicious Cakes</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <section className="latest-items section-padding fix">
                    <div className="container">
                        <div className="row cont">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item1} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item2} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item3} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item1} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item2} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="properties properties2 pb-40">
                                    <div className="card" style={{ width: "21rem" }}>
                                        <div className="card1">
                                            <img className="card-img-top" src={item3} alt="img" />
                                            <button className="btn  mt-0">Add to Cart1</button>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">Cashmere Tank + Bag</p>
                                            <span>$98.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>




<section className="instragram ">
    <Follow />
</section>



<footer>
    <Footer />
</footer>




            </div>
        )
    }

export default Cakes;