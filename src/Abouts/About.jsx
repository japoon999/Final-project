import Nav from "../Navbar/Nav"
import './About.css';
import item9 from "../assets/h2_hero1.jpg.webp";
import Burgers from "../components/Burgers";
import Lover from "../components/Lover";
import ReactPlayer from 'react-player/youtube'
import OurBlogs from "../components/OurBlogs";
import Follow from "../components/Follow";
import Footer from "../Footers/Footer";

let About = () => {
    return (
        <main>
            <div className="header-area">
                <div className="main-header ">
                    <Nav />
                </div>
            </div>


            <div className="slider-area">
                <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                    <img className="item9" src={item9} alt="item9" />
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-xxl-12">
                                <div className="hero-caption hero-caption2">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="about-area section-padding">
                <Burgers />
            </div>

            <div className="player-wrapper">

                <ReactPlayer className='react-player'
                    url='https://www.youtube.com/watch?v=up68UAfH0d0&t=1s' height="100vh" width="80%" />
            </div>


            <div>
                <Lover />
            </div>


            <div>
                <OurBlogs />
            </div>


            <div>
                <Follow />
            </div>


            <div>
                <Footer />
            </div>

        </main>


    )
}

export default About;