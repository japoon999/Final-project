import Nav from "../Navbar/Nav";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import item1 from "../assets/items1.jpg.webp";
import item2 from "../assets/items2.jpg.webp";
import item3 from "../assets/items3.jpg.webp";
import ReactPlayer from 'react-player/youtube'
import Burgers from "../components/Burgers";
import Lover from "../components/Lover";
import OurBlogs from "../components/OurBlogs";
import Follow from "../components/Follow";
import Footer from "../Footers/Footer"



const Home = () => {
    return (
        <div className="container-fulid">
            <Nav />
            <div className="imgs">
                <div className="text">
                    <h1>Healthy Made Delicious Cake</h1>
                    <div className="btn1">
                        <button>ORDER NOW</button>
                    </div>
                </div>
            </div>

            <div className="section">

                <Burgers />
            </div>

            <div className="section1">
                <Carousel>
                    <Carousel.Item>
                        <div className="d-flex justify-content-between">
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
                            <div className="card" style={{ width: "21rem" }}>

                                <div className="card1">
                                    <img className="card-img-top" src={item2} alt="img" />
                                    <button className="btn  mt-0">Add to Cart12</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">
                                    <img className="card-img-top" src={item3} alt="img" />
                                    <button className="btn mt-0">Add to Cart2</button>
                                </div>

                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-between">
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">
                                    <img className="card-img-top" src={item1} alt="img" />
                                    <button className="btn  mt-0">Add to Cart3</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">
                                    <img className="card-img-top" src={item2} alt="img" />
                                    <button className="btn  mt-0">Add to Cart4</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">
                                    <img className="card-img-top" src={item3} alt="img" />
                                    <button className="btn  mt-0">Add to Cart</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-between">
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">
                                    <img className="card-img-top" src={item1} alt="img" />
                                    <button className="btn  mt-0">Add to Cart</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">                                <img className="card-img-top" src={item2} alt="img" />
                                    <button className="btn  mt-0">Add to Cart</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>
                            </div>
                            <div className="card" style={{ width: "21rem" }}>
                                <div className="card1">                                <img className="card-img-top" src={item3} alt="img" />
                                    <button className="btn  mt-0">Add to Cart</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Cashmere Tank + Bag</p>
                                    <span>$98.00</span>
                                </div>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>





            <div className="player-wrapper">

                <ReactPlayer className='react-player'
                    url='https://www.youtube.com/watch?v=up68UAfH0d0&t=1s' height="100vh" width="80%" />
            </div>


            <section className="customer-section section-padding">

                <Lover />
            </section>


            <div className="h1-blog">
                <OurBlogs />
            </div>


            <div className="instragram top-padding">
                <Follow />
            </div>

            <div className="footer-wrapper">
                <Footer />
            </div>

        </div>
    )
}

export default Home;
