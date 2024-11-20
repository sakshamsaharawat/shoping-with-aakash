import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = ({ item }) => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>

      <div className='flex flex-wrap '>
        <div className='w-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className="w-full h-full object-cover object-top" src={item.product[0].imageUrl} alt="" />
        </div>
        <div className='ml-5'>
          <p> {item.product[0].title}</p>
          <p className='opacity-50'>size : {item.size} {item.product[0].colors}</p>
          <p className='opacity-50'>seller : {item.product[0].brand}</p>

          <div className=' flex space-x-2 mt-3'>
            <p className='line-through opacity-50 '>₹{item.price}</p>
            <p className='font-medium'>₹{item.discountedPrice}</p>
            <p className='text-green-600 font-medium'>{item.product[0].discountedPercent}% off</p>
          </div>
        </div>

      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4 ' >
        <div className=' flex items-center space-x-2'>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
        <span className='=py-1 px-7 border rounded-sm'>  3 </span>
        <IconButton sx={{ color: "RGB(145 85 253)" }}>
          <AddCircleOutlineIcon />
        </IconButton>

        <Button sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
      </div>

    </div>
  )
}

export default CartItem
