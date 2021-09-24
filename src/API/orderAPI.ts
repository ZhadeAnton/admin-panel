import axios from 'axios';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const ordersLimit = 10

export const getOrders = (accessToken: string, page: number) => {
  return axios({
    method: 'GET',
    url: `${url}/db/order?page=${page}&limit=${ordersLimit}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
