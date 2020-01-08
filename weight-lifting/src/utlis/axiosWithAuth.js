import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create( {
        baseURL: "https://weightlift2020.herokuapp.com/", // Wait for Backend
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth