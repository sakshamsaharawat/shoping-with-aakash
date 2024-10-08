import axios from "axios";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Auth/ActionType"
import { API_BASE_URL } from "../../config/apiConfig";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerfailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const token = localStorage.getItem("jwt")
export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest)
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
            console.log("user", user)
        }


        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerfailure)
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginfailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest)
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user", user)
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginfailure)
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = () => ({ type: GET_USER_SUCCESS });
const getUserfailure = () => ({ type: GET_USER_FAILURE });

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest())
    try {
        const response = await axios.get(`${API_BASE_URL}/user/userProfile`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const user = response.data;
        console.log("user", user)
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserfailure(error.message))
    }
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, paylod: null })
} 