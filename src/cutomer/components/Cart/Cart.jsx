import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative mt-5'>
      <div className='col-span-2'>
      {[1,1,1,1].map((item)=><CartItem/>)}
      </div>
      <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
      <div className='p-2 shadow-lg border rounded-md'>
      <p className='uppercase opacity-50 font-semibold'>Price Details</p>
      <hr/>
      <div className=' space-y-3 font-medium'>
      <div className='flex justify-between pt-3 text-black'>
      <span>Price</span>
      <span className='text-green-600'>₹4697</span>
      </div>
      <div className='flex justify-between pt-3 text-black'>
      <span>Discount</span>
      <span className='text-green-600'>-₹3419</span>
      </div>
      <div className='flex justify-between pt-3 text-black'>
      <span>Delivery Charges</span>
      <span className='text-green-600'>Free</span>
      </div>
      
      <div className='flex justify-between font-semibold pt-3 text-black border-t-2'>
      <span>Total Amount</span>
      <span className='text-green-600'>₹1278</span>
      </div>
      <div className=' flex items-center p-2' style={{alignItems:"center", justifyContent:"center"}}>
      <Link to="/checkout" className='w-full'><Button className='py-1 px-28 rounded-sm w-full' style={{backgroundColor:"RGB(145 85 253)", color:"white", }}> CHECK OUT</Button></Link>
      </div>

     
      </div>
  

      </div>
    </div>
      </div>
    </div>
  )
}

export default Cart
