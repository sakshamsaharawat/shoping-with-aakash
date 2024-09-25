import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className='p-5 shadow-md hover:' >
            <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12}>
                    <div className='flex w-full justify-between h-auto bg-white  sticky top-5' >
                        <Grid item xs={6}>
                            <div className='flex cursor-pointer'>
                                <img className='w-[5rem] h-[5rem] object-cover' src='https://www.tistabene.com/cdn/shop/products/KRT-0313D.jpg?v=1694081066&width=1080' alt='' />
                                <div className='ml-5 space-x-2'>
                                    <p>Men Slim Mid Rise Black Jeans</p>
                                    <p className='text-xs font-semibold opacity-50'>Size: M</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <p className='opacity-70'>₹1099</p>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                {true && <p className='font-medium'>
                                    <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-500" />
                                    <span>Delivery On Mar 03</span></p>}
                                <p className='text-xs '>Your Item Has Been Delivered</p>
                            </div>


                            {false && <p className='font-medium'>
                                <span>Expected Delivery On Mar 03</span></p>}

                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;

