import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Button, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px:20 lg:px-20'>
            <div className='p-5 mt-5 shadow-md '>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className=' flex mt-5 p-5 shadow-md border'>
                <OrderTracking activeStep={3} />
                <Button style={{ color: "RGB(145 85 253)" }}>CANCEL ORDER</Button>
            </div>

            {Array.from({ length: 7 }).map((items) =>
                <div className='p-5 mt-5 shadow-md'>
                    <Grid item xs={12}>
                        <div className='flex w-full items-center justify-between h-auto bg-white  sticky top-5' >

                            <Grid item xs={6}>
                                <div className='flex items-center cursor-pointer'>
                                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://www.tistabene.com/cdn/shop/products/KRT-0313D.jpg?v=1694081066&width=1080' alt='' />
                                    <div className='ml-5 space-y-2'>
                                        <p className='font-semibold '>Men Slim Mid Rise Black Jeans</p>
                                        <div className='flex justify-between'>
                                            <p className='space-x-5 v'><span>Color:pink</span>
                                                <span >Size: M</span></p>
                                        </div>
                                        <p>Seller: Linaria</p>
                                        <p className='opacity-70'>₹1099</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item>
                                <Box className='flex items-center' sx={{ color: deepPurple[500] }}>
                                    <StarBorderIcon sx={{}} />
                                    <span>Rate & Review Product</span>
                                </Box>
                            </Grid>
                        </div>
                    </Grid>
                </div>)}


        </div>
    )
}

export default OrderDetails
