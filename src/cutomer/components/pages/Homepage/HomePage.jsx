import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../Data/Mens_kurta'
import { Mens_Shoes } from '../../../../Data/Mens_shoes'
import { Mens_shirts } from '../../../../Data/Mens_shirts'
import { Women_saree } from '../../../../Data/Women_saree'
import { Women_jutti } from '../../../../Data/Women_jutti'
import { Button } from '@mui/material'


const HomePage = () => {
    return (
        <div>
            <div className='flex space-x-10 mt-10 mb-10'>
                <div>
                    <Button variant="contained"><a href="/product">Product</a></Button>
                </div>
                <div>
                    <Button variant="contained"><a href="/productdetail">ProductDetial</a></Button>
                </div>
            </div>

            <MainCarousel
                infinite
            />

            <div className='space-y-10 py-20 flex flex-col justify-center text-align px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"} />
                <HomeSectionCarousel data={Mens_Shoes} sectionName={"Men's Shoes"} />
                <HomeSectionCarousel data={Mens_shirts} sectionName={"Men's Shirt"} />
                <HomeSectionCarousel data={Women_saree} sectionName={"Women's Saree"} />
                <HomeSectionCarousel data={Women_jutti} sectionName={"Women's Jutti"} />



            </div>
        </div>
    )
}

export default HomePage
