import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../State/Admin/order/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const OrdersTableView = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);

    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorEl(newAnchorElArray);
    };

    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null;
        setAnchorEl(newAnchorElArray);
    };

    const dispatch = useDispatch();
    const { adminOrder } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getOrders());
    }, [adminOrder?.confirmed, adminOrder?.shipped, adminOrder?.delivered, adminOrder.deletedOrder]);

    const handleShippedOrder = (orderId, index) => {
        dispatch(shipOrder(orderId));
        handleClose(index);
    };

    const handleConfirmOrder = (orderId, index) => {
        dispatch(confirmOrder(orderId));
        handleClose(index);
    };

    const handleDeliveredOrder = (orderId, index) => {
        dispatch(deliverOrder(orderId));
        handleClose(index);
    };

    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId));
    };

    console.log('admin Orders', adminOrder);

    return (
        <div className="p-10 mt-10" >
            <Card className="mt-2">
                <CardHeader title="Recent Products" />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Status</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder?.orders?.map((item, index) => (
                                <TableRow
                                    key={item?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">
                                        <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                                            {Array.isArray(item?.orderItems) &&
                                                item?.orderItems.map((orderItem, idx) => (
                                                    <Avatar
                                                        key={idx}
                                                        src={orderItem?.product?.imageUrl || ''}
                                                    />
                                                ))}
                                        </AvatarGroup>
                                    </TableCell>

                                    <TableCell align="left">
                                        {Array.isArray(item?.orderItems) &&
                                            item?.orderItems.map((orderItem, idx) => (
                                                <p key={idx}>{orderItem?.product?.title || 'N/A'}</p>
                                            ))}
                                    </TableCell>
                                    <TableCell align="left">{item?._id}</TableCell>
                                    <TableCell align="left">₹ {item?.totalDiscountedPrice}</TableCell>
                                    <TableCell align="left">
                                        <span
                                            className={`text-white ${item?.orderStatus === 'CONFIRMED'
                                                ? 'bg-[#67c467]'
                                                : item?.orderStatus === 'SHIPPED'
                                                    ? 'bg-[blue]'
                                                    : item?.orderStatus === 'PLACED'
                                                        ? 'bg-[gray]'
                                                        : 'bg-[#a9a6a6]'
                                                }`}
                                        >
                                            {item?.orderStatus}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
};

export default OrdersTableView;
