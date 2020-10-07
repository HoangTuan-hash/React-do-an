import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimApiAction } from '../../redux/Actions/QuanLyPhimAction';
import Ticket from '../Ticket/Ticket';


export default function Movie() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimApiAction())
    }, [])
    const state = useSelector(state => state.QuanLyPhimReducer.dsPhim);
   

    
  
    const renderFilm = () => {
        let fimlIndex = 0;
        let arrIndex =[];
        while (fimlIndex <state.length){
            arrIndex.push(fimlIndex);
            fimlIndex += 8;
        }
        return arrIndex.map((fimlIndex,index)=>{
           return  <Carousel.Item key={index}>
            <div className="movie__more card">
                {state.slice(fimlIndex,(fimlIndex+8)).map((film, index) => {
                return (
                <div className="movie__items" key={index}>
                    <img className="card-img-top" src={film.hinhAnh} alt="Card image"  style={{width: 235,height:350}}/>
                    <h4 className="card-title" style={{height:45}} ><span>C18</span> <a> {film.tenPhim}</a></h4>
                    <div className="movie__time">
                        <p className="minute card-text">116 phút</p>
                    </div>
                    <div className="movie__review">
                        <p className="movie__point">6</p>
                        <p>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </p>
                    </div>
                    <div className="movie__buy">
                        <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                        <a href>MUA VÉ</a>
                    </div>
                </div>)})}
            </div>
        </Carousel.Item>
        })   
    }
    
    return (
        <section className="movie">
            <Ticket />
            <class className="movie__content">
                <div className="col">
                    <div className="myTab">
                        {/* <div> */}
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dangChieu" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#sapChieu" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                            </li>
                        </ul>
                        {/* </div> */}
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="dangChieu" role="tabpanel" aria-labelledby="home-tab">
                                <div className="col-xs-12  container">
                                    <Carousel>
                                        {renderFilm()}
                                        
                                    </Carousel>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="sapChieu" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="owl-carousel owl-exam owl-theme container">
                                    <div className="movie__more card">
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu9.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a >MUA VÉ</a>
                                                {/* <div class="color"></div> */}
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu10.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu11.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu12.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu13.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu14.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu15.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu16.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie__more card">
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu1.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu2.jpg" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu3.jpg" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu4.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu5.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu6.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu7.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                        <div className="movie__items">
                                            <img className="card-img-top" src="./img/dangchieu8.png" alt="Card image" />
                                            <h4 className="card-title"><span>C18</span> <a> Bán Đảo - Peninsula - (C18)</a></h4>
                                            <div className="movie__time">
                                                <p className="minute card-text">116 phút</p>
                                            </div>
                                            <div className="movie__review">
                                                <p className="movie__point">5.3</p>
                                                <p>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </p>
                                            </div>
                                            <div className="movie__buy">
                                                <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA" />
                                                <a href>MUA VÉ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </class>
        </section>
    )
}
