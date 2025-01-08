import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id }
    dispatch(updateCartItem(data))
  }
  const handelRemoveCartItem = () => {
    dispatch(removeCartItem(item._id))

  }

  return (
    <div className='p-5 shadow-lg border rounded-md'>

      <div className='flex flex-wrap '>
        <div className='w-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className="w-full h-full object-cover object-top" src={item?.product?.imageUrl} alt="" />
        </div>
        <div className='ml-5'>
          <p> {item?.product?.title}</p>
          <p className='opacity-50'>size : {item?.size} {item?.product?.colors}</p>
          <p className='opacity-50'>seller : {item?.product?.brand}</p>

          <div className=' flex space-x-2 mt-3'>
            <p className='line-through opacity-50 '>₹{item?.price}</p>
            <p className='font-medium'>₹{item?.discountedPrice}</p>
            <p className='text-green-600 font-medium'>{item?.product?.discountedPercent}% off</p>
          </div>
        </div>

      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4 ' >
        <div className=' flex items-center space-x-2'>
          <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
        </div>
        <span className='=py-1 px-7 border rounded-sm'>  {item?.quantity} </span>
        <IconButton onClick={() => handleUpdateCartItem(1)} sx={{ color: "RGB(145 85 253)" }}>
          <AddCircleOutlineIcon />
        </IconButton>

        <Button onClick={handelRemoveCartItem} sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
      </div>

    </div>
  )
}

export default CartItem
