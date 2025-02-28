import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { useState } from 'react';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    console.log("activeindex---", activeIndex)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 }
    };
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1)
    const syncActiveIndex = ({ item }) => setActiveIndex(item)


    const items = data.slice(activeIndex, activeIndex + 20).map((item) => <HomeSectionCard product={item} />)
    return (

        <div className='px-4 lg:px-8 '>
            <h2 className='text-2xl font-extrabold'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== data.length - 7 && <Button variant="contained" className='z-50' onClick={slideNext} sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(100%) rotate(90deg)" }} aria-label="next" >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

                {activeIndex !== 0 && <Button variant="contained" className='z-50' onClick={slidePrev} sx={{
                    position: "absolute", top: "8rem", left: "0rem",
                    transform: "translateX(-100%) rotate(-90deg)"
                }} aria-label="previous" >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel
