import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarouselData } from './HomeCarouselData';

const MainCarousel = () => {
    const items = HomeCarouselData.map((item) => <img className='cursor-pointer' src={item.image} alt="" />)

    return (
        <AliceCarousel
            // mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    )
};

export default MainCarousel
