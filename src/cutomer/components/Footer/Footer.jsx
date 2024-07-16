import { Button, Grid, Typography } from '@mui/material';
import "./Footer.css"
import React from 'react'


const Footer = () => {
    return (
        <div style={{ border: "2px solid red" }}>
            <Grid className='bg-black text-white text-center t-10 cursor-pointer'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 capitalize' varient="h6"> Company</Typography>
                    <div> <Button className='pb-5 capitalize' variant="h6" gutterBottom style={{ textTransform: "capitalize" }}> About</Button></div>
                    <div><Button className='pb-5 capitalize ' variant="h6" gutterBottom> Blog</Button></div>
                    <div> <Button className='pb-5 capitalize' variant="h6" gutterBottom> Press</Button></div>
                    <div><Button className='pb-5 capitalize' variant="h6" gutterBottom> Partners</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 capitalize' varient="h6"> Solutions</Typography>
                    <div> <Button className='pb-5 capitalize' variant="h6" gutterBottom> Marketing</Button></div>
                    <div><Button className='pb-5 capitalize' variant="h6" gutterBottom> Analytics</Button></div>
                    <div> <Button className='pb-5 capitalize' variant="h6" gutterBottom> Commerce</Button></div>
                    <div><Button className='pb-5 capitalize' variant="h6" gutterBottom> Inshits</Button></div>
                    <div><Button className='pb-5 capitalize' variant="h6" gutterBottom> Support</Button></div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 capitalize' varient="h6"> Documentation</Typography>
                    <div> <Button className='pb-5 capitalize' variant="h6" gutterBottom> Guides</Button></div>
                    <div><Button className='pb-5 capitalize' variant="h6" gutterBottom> Api Status</Button></div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 text-capitalize' varient="h6"> Legal</Typography>
                    <div> <Button className='pb-5 text-capitalize' variant="h6" gutterBottom> Claim</Button></div>
                    <div> <Button className='pb-5 text-capitalize' variant="h6" gutterBottom> Privacy</Button></div>
                    <div> <Button className='pb-5 text-capitalize' variant="h6" gutterBottom> Terms</Button></div>
                </Grid>
            </Grid>
        </div>

    )
}

export default Footer

// here above code in grid item this is used for responsive in which 
// xs is for mobile  which is extra small
// sm is for small
// md is for medium
// lg is for large
