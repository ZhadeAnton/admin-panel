import axios from 'axios';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const ordersLimit = 4

interface IGetOrder {
  accessToken: string,
  page: number
}

export const getOrders = ({accessToken, page}: IGetOrder) => {
  return axios({
    method: 'GET',
    url: `${url}api/db/order?page=${page}&limit=${ordersLimit}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
