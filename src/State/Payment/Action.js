import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType"

export const createPayment = (orderId) => async (dispatch) => {
    console.log("orderId-payment", orderId);
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.post(`/payment/${orderId}`);
        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
        console.log("payment-success-data",data)
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "An error occurred";
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: errorMessage });
    }
};

export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(
            `/payment/?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
        );
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || "An error occurred";
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: errorMessage });
    }
};
