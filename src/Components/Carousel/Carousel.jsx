import React, { Fragment, useState } from 'react';
import {Carousel} from 'react-bootstrap';
import ModalVideo from 'react-modal-video'

import { useSelector } from 'react-redux';


export default function CarouselMovie() {
    const[trailerID,settrailerID]=useState('');
    const [isOpen, setOpen] = useState(false)
    const state = useSelector(state => state.QuanLyPhimReducer.dsPhim)

    const reanderCarousel = ()=>{
      return state.slice(6,10).map((fiml,index)=>{
        return(
          <Carousel.Item className="item">
            <img
              className="d-block w-100"
              src={fiml.hinhAnh}
              alt={fiml.hinhAnh}
            />
            <div class="tixCarousel__text">
              <a   onClick={() => onClickTrailer(fiml)
              }>
                <i class="fa fa-play"></i>
                </a>
            </div>
          </Carousel.Item>
        )
      })
    }
    const onClickTrailer = (filmClick) =>{
      setOpen(true);
      settrailerID(filmClick.trailer.substr(30))
    }
    return (
      <Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailerID} onClose={() => setOpen(false)} />
      <Carousel className="tixCarousel" >
        {reanderCarousel()}
      </Carousel>
      </Fragment>
    )
}
