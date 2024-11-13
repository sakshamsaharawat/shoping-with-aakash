import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { authReducer } from "./Auth/Reducer"
import { thunk } from "redux-thunk"
import { customerProductReducer } from "./Product/Reducer"
import { cartReducer } from "./Cart/Reducer"

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProductReducer,
    cart:cartReducer

})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))