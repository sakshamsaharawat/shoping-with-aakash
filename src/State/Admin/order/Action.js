import { api } from "../../../config/apiConfig";
import { CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders = () => {
    console.log("getorders--------")
    return async (dispatch) => {
        dispatch({ type: GET_ORDERS_REQUEST });
        try {
            const { data } = await api.get(`admin/orders/`);
            dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
        } catch (error) {
            console.error("Error fetching order:", error);
            dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
        }
    };
};

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/orders/${orderId}/confirm`);
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching order:", error);
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
};

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/orders/${orderId}/ship`);
        dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching order:", error);
        dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
    }
};

export const deliverOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`admin/orders/${orderId}/deliver`);
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching order:", error);
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
};

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        const { data } = await api.delete(`admin/orders/${orderId}/delete`);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching order:", error);
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
};