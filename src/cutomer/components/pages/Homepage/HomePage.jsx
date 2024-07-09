import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../Data/Mens_kurta'

const HomePage = () => {
    return (
        <div>
            <MainCarousel />

            <div className='space-y-10 py-20 flex flex-col justify-center text-align px-5 lg:px-10' style={{ border: "2px solid red" }}>
                <HomeSectionCarousel data={mens_kurta} />
                <HomeSectionCarousel data={mens_kurta} />
                <HomeSectionCarousel data={mens_kurta} />
                <HomeSectionCarousel data={mens_kurta} />
                <HomeSectionCarousel data={mens_kurta} />

            </div>
        </div>
    )
}

export default HomePage
