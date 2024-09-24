import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>

    <div className='flex flex-wrap '>
        <div className='w-[5rem] lg:w-[9rem] lg:h-[9rem]'>
        <img className="w-full h-full object-cover object-top" src='https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151' alt='car-image'/>
        </div>
        <div className='ml-5'>
            <p> Men Slim Rise Black Jeans</p>
            <p className='opacity-50'>size:L White</p>
            <p className='opacity-50'>seller: Crishtaliyo zfashion</p>
        
        <div className=' flex space-x-2 mt-3'>
                    <p className='line-through opacity-50 '>₹1799</p>
                    <p className='font-medium'>₹599</p>
                    <p className='text-green-600 font-medium'>67% off</p>
            </div>
                </div>
                
    </div>
    <div className='lg:flex items-center lg:space-x-10 pt-4 ' >
                 <div className=' flex items-center space-x-2'>
                 <IconButton>
                 <RemoveCircleOutlineIcon/>
                 </IconButton>
                 </div>
                 <span className='=py-1 px-7 border rounded-sm'>  3 </span>
                 <IconButton sx={{color:"RGB(145 85 253)"}}>
                 <AddCircleOutlineIcon/>
                 </IconButton>
              
                 <Button sx={{color:"RGB(145 85 253)"}}>REMOVE</Button>
               </div>
      
    </div>
  )
}

export default CartItem
