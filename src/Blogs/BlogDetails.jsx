import Nav from "../Navbar/Nav";
import './BlogDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import item9 from "../assets/h2_hero1.jpg.webp";
import blog1 from "../assets/blog_1.jpg";
import preview from "../assets/preview.jpg.webp";
import author from "../assets/author.png.webp";
import post1 from "../assets/post1.jpg";
import comment_1 from "../assets/comment_1.png.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Footers/Footer"



let BlogDetails = () => {
    return (
        <div className="box1">
            <Nav />
            <div className="slider-area">
                <div className="single-slider slider-height2 slider-bg2 d-flex align-items-center">
                    <img className="item9" src={item9} alt="item9" />
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-xxl-12">
                                <div className="hero-caption hero-caption2">
                                    <h2>Blog Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img className="card-img rounded-0" src={blog1} alt="blog1" />
                                </div>
                                <div className="blog_details">
                                    <h2>Second divided from form fish beast made every of seas
                                        all gathered us saying he our</h2>
                                    <ul className="blog-info-link mt-3 mb-4">
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
                                    <p className="excert">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower</p>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower to actually sit through a
                                        self-imposed MCSE training. who has the willpower to actually
                                    </p>
                                    <div className="quote-wrapper">
                                        <div className="quotes">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at
                                            a fraction of the camp price. However, who has the willpower to actually sit through a
                                            self-imposed MCSE training.
                                        </div>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower to actually sit through a
                                            self-imposed MCSE training. who has the willpower to actually
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="navigation-top">
                                <div className="d-sm-flex justify-content-between text-center">
                                    <p className="like-info">
                                        <span className="align-middle">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </span>
                                        Lily and 4
                                        people like this
                                    </p>
                                    <div className="col-sm-4 text-center my-2 my-sm-0"></div>
                                    <ul className="social-icons">
                                        <li>                                            <FontAwesomeIcon icon={faInstagram} className="fab fa-facebook-f" />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
                                        </li>
                                        <li>                                                                                      <FontAwesomeIcon icon={faFacebook} className="fab fa-dribbble" />

                                        </li>
                                        <li><FontAwesomeIcon icon={faLinkedin} className="fab fa-behance" /></li>
                                    </ul>
                                </div>

                                <div className="navigation-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div className="thumb">
                                                <img className="img-fluid" src={preview} alt="preview" />
                                            </div>
                                            <div className="detials">
                                                <p>Prev Post</p>
                                                <h4>Space The Final Frontier</h4>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                            <div className="detials">
                                                <p>Next Post</p>
                                                <h4>Telescopes 101</h4>
                                            </div>
                                            <div className="thumb">
                                                <img className="img-fluid" src={preview} alt="preview" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="blog-author">
                                <div className="media align-items-center">
                                    <img src={author} alt="blog1" />
                                    <div className="media-body">
                                        <h4>Harvard milan</h4>
                                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                                            our dominion twon Second divided from</p>

                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h4>05 Comments</h4>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={comment_1} alt="comment_1" />
                                            </div>

                                            <div className="desc">
                                                <p className="comment">
                                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>Emilly Blunt</h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <div className="reply-btn">
                                                            <button className="btn-reply text-uppercase">
                                                                reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={comment_1} alt="comment_1" />
                                            </div>

                                            <div className="desc">
                                                <p className="comment">
                                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>Emilly Blunt</h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <div className="reply-btn">
                                                            <button className="btn-reply text-uppercase">
                                                                reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={comment_1} alt="comment_1" />
                                            </div>

                                            <div className="desc">
                                                <p className="comment">
                                                    Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                                    Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <h5>Emilly Blunt</h5>
                                                        <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        <div className="reply-btn">
                                                            <button className="btn-reply text-uppercase">
                                                                reply
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h4>Leave a Reply</h4>
                                <form action="#" className="form-contact comment_form" id="commentForm">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="comment" id="message" cols="30" rows="9" placeholder="Write Comment"></textarea>

                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    name="name" placeholder="Name" id="name" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    name="email" placeholder="Email" id="email" />
                                            </div>
                                        </div>


                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                    name="website" placeholder="website" id="website" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button className="button button-contactForm btn_1" type="submit">Post Comment</button>
                                    </div>
                                </form>
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

export default BlogDetails;