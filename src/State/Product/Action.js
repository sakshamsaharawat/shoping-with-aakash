import { api } from '../../config/apiConfig'
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const params = new URLSearchParams();

    if (reqData.colors) params.append("color", reqData.colors);
    if (reqData.sizes) params.append("sizes", reqData.sizes);
    if (reqData.minPrice) params.append("minPrice", reqData.minPrice);
    if (reqData.maxPrice) params.append("maxPrice", reqData.maxPrice);
    if (reqData.minDiscount) params.append("minDiscount", reqData.minDiscount);
    if (reqData.category) params.append("category", reqData.category);
    if (reqData.stock) params.append("stock", reqData.stock);
    if (reqData.sort) params.append("sort", reqData.sort);
    params.append("pageNumber", reqData.pageNumber || 1); // Default to 1
    params.append("pageSize", reqData.pagesize || 10);    // Default to 10

    const queryString = params.toString();
    console.log("Query string sent to backend:", queryString);

    try {
        const { data } = await api.post(`products/get-all?${queryString}`);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};


export const findProductsById = (reqData) => (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { productId } = reqData;

    try {
        const { data } = api.get(`/products/${productId}`)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }

};