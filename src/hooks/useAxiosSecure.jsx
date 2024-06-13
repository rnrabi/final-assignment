import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // const {logOut} = useAuth()
    // const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log(token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     console.log(error.response.status)
    //     const status = error.response.status;
    //     if (status === 401 || status === 403) {
    //         await logOut()
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // })

    return axiosSecure;
};

export default useAxiosSecure;