import {api} from '../../config/apiConfig';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from './ActionType';

export const creatOrder = (reqData) => async (dispatch) => {
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const {data} = api.post(`/order/`, reqData.address)
        if(data.id){
            reqData.navigate({search: `step=3&order_id${data.id}`})
        }
        console.log("created order - ", data);
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CREATE_ORDER_FAILURE, payload: error.message})
    }
}

export const getOrderById = (orderId) => (dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST})
    try {
        const { data} = api.get(`/order/:id/${orderId}`)             // (`/orders/${orderId}`)
        dispatch({type: GET_ORDER_BY_ID_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE , payload: error.message})
    }
}