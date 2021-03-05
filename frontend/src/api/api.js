const { default: axios } = require("axios");

const BASE_URL = "http://localhost:5000/api/";
const PRODUCTS_URL = `${BASE_URL}products`;
const REGISTER_URL = `${BASE_URL}register`;
const AUTH_URL = `${BASE_URL}auth`; <<
<< << < HEAD
const ORDER_URL = `${BASE_URL}orders`; ===
=== =
const CREATE_ORDER = `${BASE_URL}orders`; >>>
>>> > e569527ce6d360add633ac0e4ff0ba7c4f07736b

const get = async(url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const post = async(url, obj) => {
    try {
        const response = await axios.post(url, obj);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const setToken = (token) => {
    axios.default.headers.common['Authorization'] = `Bearer ${token}`;
}

export { CREATE_ORDER, AUTH_URL, REGISTER_URL, PRODUCTS_URL, get, post, setToken }