import axios from "axios";

let instance = axios.create({
    baseURL: 'http://192.168.1.9:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
export default instance;
