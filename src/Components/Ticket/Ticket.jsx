import moment from 'moment';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhimApiAction } from '../../redux/Actions/QuanLyPhimAction';

export default function Ticket() {
    //Bắt sự kiện click out side Ticket
    const node = useRef();
    useEffect(() => {
        //  thêm khi đã mount
        document.addEventListener("mousedown", handleClick);
        // dọn dẹp
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, []);
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setToggleDropDown(false);
        setToggleCinema(false)
        
    };
    //Kết thúc phần bắt sự kiện click outside

    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [nameFiml, setnameFiml] = useState('Phim');
    const {dsPhim} = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    //Hàm render và chọn phim
    const renderDropDownFiml = () =>{
        if(toggleDropDown){
            return dsPhim.map((fiml,index)=>{
                return (
                    <li key={index}  onClick={()=>{
                        setnameFiml(fiml.tenPhim);
                        dispatch(layChiTietPhimApiAction(fiml.maPhim))
                    }}>
                        <a>
                            <p>{fiml.tenPhim}</p>
                        </a>
                    </li>
                )
            })
        }
    }

    //Hàm render và chọn Rạp
    const {chiTietPhim} = useSelector(state => state.QuanLyPhimReducer);
    const [nameCinema, setNameCinema] = useState('Rạp');
   const [toggleCinema, setToggleCinema] = useState(false);
   const [maCumRapChon, setMaCumRapChon] = useState('')
    const renderCinema = () =>{
        
        if(nameFiml != "Phim"){
            if(toggleCinema){
                return chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                    return heThongRap.cumRapChieu?.map((cumRap,index)=>{
                        return (
                            <li key = {index} onClick={()=>{
                                setNameCinema(cumRap.tenCumRap);
                                setMaCumRapChon(cumRap.maCumRap);
                            }}>
                                <a >
                                        <p>{cumRap.tenCumRap}</p>
                                </a>
                            </li>
                        )
                    })
                })
            }
        }else{
            return (
                <li>
                    <a>
                            <p> Xin vui lòng chọn phim</p>
                    </a>
                 </li> )
        }
    }
    //end hàm renderCinema

    //Hàm render Ngày xem
    const [date, setDate] = useState('ngày xem');
    const [toggleDate, setToggleDate] = useState(false);

    const renderDate = () =>{
        if(nameCinema != 'Rạp'){
            if(toggleDate){
                return chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                    let cumRapLayDate = heThongRap.cumRapChieu.filter((cumRap) => cumRap.maCumRap === maCumRapChon);
                    return cumRapLayDate?.map((cumRap,index)=>{
                        return cumRap.lichChieuPhim?.map((lichChieu,index)=>{
                            return (
                                <li onClick={()=>{
                                    console.log(lichChieu.ngayChieuGioChieu);
                                    setDate(moment(lichChieu.ngayChieuGioChieu).format('dddd-mm-yyyy'));
                                }}>
                                    <a >
                                        <p>Hôm nay</p>
                                        <p>{moment(lichChieu.ngayChieuGioChieu).format('dddd-mm-yyyy')}</p>
                                    </a>
                                </li>
                            )
                        })
                    })
                })
            }
        }else{
            return (
                <li>
                    <a >
                        <p>Xin vui lòng chọn rạp</p>
                    </a>
                </li>
            )
        }  
    }

    return (
        <section className="ticket d-none d-lg-block" id="ticket">
            <div className="container" ref={node}>
                <div className="ticket__content row">
                    <div className="ticket__item col-3" onClick={()=>{
                            setToggleDropDown(!toggleDropDown);
                            setToggleCinema(false)
                        }}>
                        <div className="ticket__item--content">
                            <span>{nameFiml}</span>
                            <img src="./img/dropdown-icon.png" alt />
                        </div>
                        <div className="ticket__dropdow" style={{display: toggleDropDown ? 'block' : 'none'}} >
                            <ul>
                                {renderDropDownFiml()}
                            </ul>
                        </div>
                    </div>

                    <div className="ticket__item col"
                             onClick={()=>{
                                setToggleCinema(!toggleCinema);
                                setToggleDate(false)
                             }}>
                        <div className="ticket__item--content">
                            <span>{nameCinema}</span>
                            <img src="./img/dropdown-icon.png" alt />
                        </div>
                        <div className="ticket__dropdow" style={{display: toggleCinema ? 'block' : 'none'}}>
                            <ul>
                                {renderCinema()}
                            </ul>
                        </div>
                    </div>
                    <div className="ticket__item col" 
                            onClick={()=>{
                                setToggleDate(!toggleDate);
                            }}>
                        <div className="ticket__item--content">
                            <span>{date}</span>
                            <img src="./img/dropdown-icon.png" alt />
                        </div>
                        <div className="ticket__dropdow" style={{display: toggleDate ? "block" : "none"}}>
                            <ul>
                               {renderDate()}
                            </ul>
                        </div>
                    </div>
                    <div className="ticket__item col">
                        <div className="ticket__item--content">
                            <span>Suất chiếu</span>
                            <img src="./img/dropdown-icon.png" alt />
                        </div>
                        <div className="ticket__dropdow">
                            {/* <ul>
                                <li><a href="#">
                                    <p>13:15</p>
                                </a></li>
                                <li><a href="#">
                                    <p>13:15 </p>
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
                            </ul> */}
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
    )
}
