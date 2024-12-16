import { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS } from "../Order/ActionType"
import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCT_BY_ID_REQUEST, DELETE_PRODUCT_BY_ID_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null

}

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case DELETE_PRODUCT_BY_ID_REQUEST:
        case CREATE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload }
        case DELETE_PRODUCT_BY_ID_SUCCESS:
            return { ...state, deletedProducts: action.payload, loading: false }
        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, success: true, product: action.payload, error: null }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload }

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case DELETE_PRODUCT_BY_ID_FAILURE:
        case CREATE_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}