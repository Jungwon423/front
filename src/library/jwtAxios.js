import axios from "axios";
import store from "../store";


const instance = axios.create({
    baseURL: process.env.VUE_APP_API_ROOT,
    // https://zigdeal.shop:8080/api
})

instance.interceptors.request.use(function(config) {
    if (store.state.Login.token != '') {
        config['headers'] = {
            Authorization: `Bearer ${store.state.Login.token}`
        }
    }
    return config;
})

// instance.interceptors.response.use(function(config) {
// })

export default instance
