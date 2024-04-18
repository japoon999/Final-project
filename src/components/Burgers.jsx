import './Burgers.css';
import cake from "../assets/about1.jpg.webp";
import 'bootstrap/dist/css/bootstrap.min.css';




let Burgers
    = () => {
        return (
            <div className="section">
                <div className="head">
                    <h3>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h3>
                    <div className="line"></div>
                </div>

                <div className="info">
                    <div className="texts">
                        <h5>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h5>
                        <br />
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</h6>
                        <br />
                        <h6>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</h6>
                    </div>

                    <div className="cake">
                        <div className="cek-img">
                            <img className="cake" src={cake} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Burgers;