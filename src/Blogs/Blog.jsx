import Nav from "../Navbar/Nav"
import './Blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footers/Footer"
import item9 from "../assets/h2_hero1.jpg.webp";
import blog1 from "../assets/blog_1.jpg";
import post1 from "../assets/post1.jpg";
import telefon from "../assets/telefon.jpg";
import ayaqqabi from "../assets/ayaqqabi.jpg";
import caska from "../assets/caska.jpg";

let Blog = () => {
    return (
        <div className="box1">
            <div><Nav />  </div>

            <div className="slider-area">
                <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                    <img className="item9" src={item9} alt="item9" />
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-xxl-12">
                                <div className="hero-caption hero-caption2">
                                    <h2>Blog Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog_area section-padding">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={blog1} alt="blog1" />
                                        <button className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </button>
                                    </div>
                                    <div className="blog_details">
                                        <p className="d-inline-block"><h2 className="blog-head">Google inks pact for new 35-storey office</h2></p>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>

                                        <ul className="blog-info-link">
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                                                    Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faComment} className="fa fa-comments" />

                                                    03 Comments</a>
                                            </li>
                                        </ul>

                                    </div>

                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={telefon} alt="blog1" />
                                        <button className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </button>
                                    </div>
                                    <div className="blog_details">
                                        <p className="d-inline-block"><h2 className="blog-head">Google inks pact for new 35-storey office</h2></p>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>

                                        <ul className="blog-info-link">
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                                                    Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faComment} className="fa fa-comments" />

                                                    03 Comments</a>
                                            </li>
                                        </ul>

                                    </div>

                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={ayaqqabi} alt="blog1" />
                                        <button className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </button>
                                    </div>
                                    <div className="blog_details">
                                        <p className="d-inline-block"><h2 className="blog-head">Google inks pact for new 35-storey office</h2></p>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>

                                        <ul className="blog-info-link">
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                                                    Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faComment} className="fa fa-comments" />

                                                    03 Comments</a>
                                            </li>
                                        </ul>

                                    </div>

                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={caska} alt="blog1" />
                                        <button className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </button>
                                    </div>
                                    <div className="blog_details">
                                        <p className="d-inline-block"><h2 className="blog-head">Google inks pact for new 35-storey office</h2></p>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>

                                        <ul className="blog-info-link">
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                                                    Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faComment} className="fa fa-comments" />

                                                    03 Comments</a>
                                            </li>
                                        </ul>

                                    </div>

                                </article>
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src={blog1} alt="blog1" />
                                        <button className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </button>
                                    </div>
                                    <div className="blog_details">
                                        <p className="d-inline-block"><h2 className="blog-head">Google inks pact for new 35-storey office</h2></p>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>

                                        <ul className="blog-info-link">
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faUser} className="fa fa-user" />
                                                    Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon icon={faComment} className="fa fa-comments" />

                                                    03 Comments</a>
                                            </li>
                                        </ul>

                                    </div>

                                </article>
                            </div>


                        </div>

                        <div className="col-lg-4">

                            <div className="blog_right_sidebar">
                                <aside className="single_sidebar_widget search_widget">
                                    <form action="#">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search Keyword" />
                                                <div className="input-group-append d-flex">
                                                    <button className="boxed-btn2" type="button">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </aside>



                                <aside className="single_sidebar_widget post_category_widget">
                                    <h4 className="widget_title">Category</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p> Health Care (21)</p>
                                                <p>(52)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Resaurant food</p>
                                                <p>(37)</p>
                                            </a>

                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Travel news</p>
                                                <p>(10)</p>
                                            </a>

                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>RModern technology</p>
                                                <p>(45)</p>
                                            </a>

                                        </li>
                                        <li>                                            <a href="#" className="d-flex">
                                            <p>Product </p>
                                            <p>(11)</p>
                                        </a>
                                        </li>
                                        <li>                                            <a href="#" className="d-flex">
                                            <p>Inspiration </p>
                                            <p>(21)</p>
                                        </a>
                                        </li>
                                    </ul>
                                </aside>



                                <aside className="single_sidebar_widget popular_post_widget">
                                    <h4 className="widget_title">Recent Post</h4>
                                    <div className="media post_item">
                                        <img className="post1" src={post1} alt="post1" />
                                        <div className="media-body">
                                            <p>January 12, 2019</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img className="post1" src={post1} alt="post1" />
                                        <div className="media-body">
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img className="post1" src={post1} alt="post1" />
                                        <div className="media-body">
                                            <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img className="post1" src={post1} alt="post1" />
                                        <div className="media-body">
                                            <p>01 Hours ago</p>
                                        </div>
                                    </div>

                                </aside>






                                <aside className="single_sidebar_widget newsletter_widget">
                                    <h1 className="widget_title"></h1>
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="email" className="form-control" placeholder="Enter email" required="" />
                                        </div>
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                                    </form>
                                </aside>

                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <div>
                <Footer />
            </div>

        </div>


    )
}

export default Blog;

