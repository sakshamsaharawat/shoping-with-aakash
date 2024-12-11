import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { getOrderById } from "../../../State/Order/Action";
import OrderTracking from "../Order/OrderTracking";

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referencedId, setReferencedId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId } = useParams();

    const dispatch = useDispatch()
    const { order } = useSelector(store => store);


    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    }, [])

    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId }
            dispatch(getOrderById(orderId))
            dispatch(updatePayment(data))
        }
    }, [orderId, paymentId])


    return (
        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center  mt-6">
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb: 6, width: "fit-content" }}>
                    <AlertTitle>PAyment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>
            </div>
            <OrderTracking activeStep={1} />
            <Grid container className="space-y-5 py-5 pt-20 ">
                {order?.order?.orderItems?.map((item) => <Grid container item className="space-y-5" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex items-center ">
                            <img
                                src={item?.product?.imageUrl}
                                alt={item?.product?.title}
                                className="w-[7rem] h-[7rem] object-cover object-top"
                            />
                            <div className="ml-5 space-y-2">
                                <p>{item.product.title}</p>
                                <div className="opacity-50 text-xs font-semibold space-x-5"><span>Color:{item?.product?.color}</span>
                                    <span>Size:{item?.size}</span>
                                </div>
                                <p>seller:{item?.product?.brand}</p>
                                <p>₹{item?.discountedPrice}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <AddressCard address={order?.order?.shippingAddress} />
                    </Grid>
                </Grid>)}
            </Grid>
        </div>
    )

}

export default PaymentSuccess