import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
   <div>
  <Grid container spacing={2}>
    <Grid item xs={1}>
      <Avatar className='text-white mt-0' sx={{ width: 56, height: 56, bgcolor: "#9155fd"}}>A</Avatar>
    </Grid>
    <Grid item xs={11}>
        <Box>
          <p className='font-semibold text-lg'>Aakash</p>
          <p className='opacity-70'>September 23, 2024</p>
        </Box>
        <Rating value={3.5} name='half-rating' readOnly precision={0.5} />
      <p>Nice product, I love this shirt</p>
    </Grid>
   
  </Grid>

</div>
  )
}

export default ProductReviewCard
