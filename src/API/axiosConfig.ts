
import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api/',
  headers: {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    'Content-Type': 'application/json'
  }
})

export default axiosConfig
