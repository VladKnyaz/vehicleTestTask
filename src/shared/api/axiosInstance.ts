import * as axios from "axios";

export const axiosInstance = new axios.Axios({
    baseURL: 'https://test.tspb.su/test-task/',
    withCredentials: true
})