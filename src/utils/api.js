import axios from "axios";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT_ADDRESS,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_TMDB_TOKEN,
        Accept: "application/json"
    }
})


export default axiosConfig