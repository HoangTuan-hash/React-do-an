import React from 'react'
import './_carousel.scss';
// import '../../Assets/Css/owl.carousel.min.css'
// import '../../Assets/Css/owl.theme.default.css' 

export default function Carousel() {
    return (
        <section className="tixCarousel">
            <div className="tixCarousel__content">
                <div className="owl-carousel owl-exam owl-theme">
                    <div className="item">
                        <img src="./img/carousel1.png" alt />
                        <div className="tixCarousel__text">
                            <a className="js-video-btn" data-video-id="686mNAJVXzA"><i className="fa fa-play" /></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./img/carousel2.jpg" alt />
                        <div className="tixCarousel__text">
                            <a className="js-video-btn" data-video-id="686mNAJVXzA"><i className="fa fa-play" /></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./img/carousel3.jpg" alt />
                        <div className="tixCarousel__text">
                            <a className="js-video-btn" data-video-id="686mNAJVXzA"><i className="fa fa-play" /></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./img/carousel4.jpg" alt />
                        <div className="tixCarousel__text">
                            <a className="js-video-btn" data-video-id="686mNAJVXzA"><i className="fa fa-play" /></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./img/carousel5.png" alt />
                        <div className="tixCarousel__text">
                            <a className="js-video-btn" data-video-id="686mNAJVXzA"><i className="fa fa-play" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
