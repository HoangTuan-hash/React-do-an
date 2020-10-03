import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimApiAction } from '../../redux/Actions/QuanLyPhimAction';


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
            {/* ticket Tuấn võ */}
            <section className="ticket d-none d-lg-block" id="ticket">
                <div className="container">
                    <div className="ticket__content row">
                        <div className="ticket__item col-3">
                            <div className="ticket__item--content">
                                <span>Phim</span>
                                <img src="./img/dropdown-icon.png" alt />
                            </div>
                            <div className="ticket__dropdow">
                                <ul>
                                    <li><a href="#">
                                        <p>Bán Đảo - Peninsula - (C18)</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Bóng Ma Không Xác - Without A Body - (C18)
                                         </p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Bằng Chứng Vô Hình - (C18)</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Đỉnh Mù Sương - Foggy Mountain - (C18)</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Tàn Tích Quỷ Ám - Relic - (C18)</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hậu Duệ Thần Sấm - Mortal - (C16)</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Yêu Nhau Mùa Ế - Low Season - (C16)</p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ticket__item col">
                            <div className="ticket__item--content">
                                <span>Rạp</span>
                                <img src="./img/dropdown-icon.png" alt />
                            </div>
                            <div className="ticket__dropdow">
                                <ul>
                                    <li><a href="#">
                                        <p>CGV Aeon Bình Tân</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV Aeon Tân Phú
                  </p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV Crescent Mall</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV Giga Mall Thủ Đức</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV Hoàng Văn Thụ</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV Hùng Vương Plaza</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>CGV IMC Trần Quang Khải</p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ticket__item col">
                            <div className="ticket__item--content">
                                <span>Ngày xem</span>
                                <img src="./img/dropdown-icon.png" alt />
                            </div>
                            <div className="ticket__dropdow">
                                <ul>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>Hôm nay</p>
                                        <p>2020-08-06</p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ticket__item col">
                            <div className="ticket__item--content">
                                <span>Suất chiếu</span>
                                <img src="./img/dropdown-icon.png" alt />
                            </div>
                            <div className="ticket__dropdow">
                                <ul>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15
                  </p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                    <li><a href="#">
                                        <p>13:15</p>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ticket__item col">
                            <div className="ticket__item--content">
                                <button className="btn btn-dark">Mua vé ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end ticket*/}
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
                                                <a href>MUA VÉ</a>
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
