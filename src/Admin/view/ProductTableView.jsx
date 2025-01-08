import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById, findProducts } from '../../State/Product/Action';
import { useParams } from 'react-router-dom';


const ProductTableView = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store)
    const { levelThree } = useParams();
    console.log("productsTable", products)

    useEffect(() => {

        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: null,
            maxPrice: null,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: " ",
        };

        dispatch(findProducts(data));
    }, [products.deletedProducts]);

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProductById(productId));
    };

    return (
        <div className='p-5'>
            <Card className="mt-2">
                <CardHeader title="Recent Products" />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.products?.content?.map((item) => (
                                <TableRow
                                    key={item?.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">
                                        <Avatar src={item?.imageUrl}>

                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="left">{item?.title}
                                    </TableCell>
                                    <TableCell align="left">{item?.category.name}</TableCell>
                                    <TableCell align="left">₹ {item?.discountedPrice}</TableCell>
                                    <TableCell align="left">{item?.quantity}</TableCell>
                                    <TableCell align="left">
                                        <Button variant='outlined' onClick={() => handleDeleteProduct(item._id)}>DELETE</Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default ProductTableView
