import axios from 'axios';

const createOrder = (order) => async (dispatch) => {    
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const { data } = await axios.post("http://localhost:3000/api/orders", order);
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    }
}

export default createOrder;