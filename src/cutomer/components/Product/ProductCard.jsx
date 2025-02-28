import React, { useState } from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openUserMenu = Boolean(anchorEl);

    const navigate = useNavigate();
    const handleOrderDetailsClick = () => {
        setAnchorEl(null);
        navigate(`/product/${product?._id}`);
    };

    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer' onClick={handleOrderDetailsClick}>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product?.imageUrl} alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product?.brand}</p>
                    <p >{product?.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹{product?.discountedPrice}</p>
                    <p className='line-through opacity-50'>₹{product?.price}</p>
                    <p className='text-green-600 font-semibold'>{product?.discountedPercent}% off</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
