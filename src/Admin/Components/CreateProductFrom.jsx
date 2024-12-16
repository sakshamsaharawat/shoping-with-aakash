import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';
import { Typography } from '@mui/material';


const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 }

]
const CreateProductFrom = () => {
  const [productData, setproductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountedPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCatgory: "",
    thridlevelCategory: "",
    description: ""
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setproductData((prevState) => ({
      ...prevState,
      size: sizes
    }))
  }
 const handleSubmit = (e) =>{
  e.preventDefault();
  dispatch(createProduct(productData))
 }

  return (
    <Fragment className="createProductContainer">
    <Typography variant='h3' sx={{textAlign:"center"}} className='py-10 text-center'>

    </Typography>

    </Fragment>
  )
}

export default CreateProductFrom
