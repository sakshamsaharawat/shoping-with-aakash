import { api } from '../../config/apiConfig'
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_BY_ID_REQUEST, DELETE_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    try {
        const { data } = await api.post('products/get-all', reqData); // Sending reqData in the body
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};


export const findProductById = (productId) => async (dispatch) => {
    console.log("dipatch", dispatch)
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    console.log("productId-on-action", productId)
    try {
        const { data } = await api.get(`/products/${productId}`)
        console.log("payload--", data)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data.product })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }

};

export const deleteProductById = (productId) => async (dispatch) => {
    console.log("dipatch", dispatch)
    dispatch({ type: DELETE_PRODUCT_BY_ID_REQUEST })
    console.log("productId-on-action", productId)
    try {
        const { data } = await api.delete(`/admin/products/${productId}`)
        console.log("payload--", data)
        dispatch({ type: DELETE_PRODUCT_BY_ID_SUCCESS, payload: productId })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }

};

export const createProduct = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    try {
        const { data } = await api.post(`/admin/products/`, product)
        console.log("payload--", data)
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
    }

};