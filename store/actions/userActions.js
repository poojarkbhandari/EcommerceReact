import axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } from '../constants/userConstants';

const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post("http://localhost:3000/api/users/login", { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
}

const signup = (name, email, password, address, contact) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password, address, contact } });
    try {
        const { data } = await axios.post("http://localhost/api/users", { name, email, password ,address, contact});
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
    }
}

export default { login, signup };