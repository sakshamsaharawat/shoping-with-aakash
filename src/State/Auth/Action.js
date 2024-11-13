import axios from "axios";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Auth/ActionType"
import { API_BASE_URL } from "../../config/apiConfig";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user, jwt) => ({ type: REGISTER_SUCCESS, payload: {user, jwt }});
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });
const jwt = localStorage.getItem("jwt")

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(registerSuccess({firstName: "Aakash"}, user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message));
        console.error('Registration error:', error.message);
    }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user,jwt) => ({ type: LOGIN_SUCCESS, payload: {user, jwt} });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    console.log("login user data", userData)
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;
        // console.log("Login API response:", user); // Debugging line
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
            dispatch(loginSuccess(user.user, user.jwt));
            dispatch(getUser(user.jwt));
        }
    } catch (error) {
        // console.error("Login error:", error.message); // Debugging line
        dispatch(loginFailure(error.message));
    }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = () => ({ type: GET_USER_FAILURE });

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/user/userProfile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;
        // console.log("getUser API response:", user); // Debugging line
        dispatch(getUserSuccess(user));
    } catch (error) {
        // console.error("getUser error:", error.message); // Debugging line
        dispatch(getUserFailure(error.message));
    }
};

export const logout = () => (dispatch) => {
    dispatch({type:LOGOUT, payload: null})
    localStorage.clear();

}