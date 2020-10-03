import React, { Fragment } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Header from '../../Components/Header/Header'
import Movie from '../../Components/Movie/Movie'


export default function Home() {
    return (
        <Fragment>
            <Header />
            <Carousel />
            <Movie />
       </Fragment>
    )
}
