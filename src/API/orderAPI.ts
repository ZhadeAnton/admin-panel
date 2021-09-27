import axios from 'axios';

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID
const ordersLimit = 4

interface IGetOrder {
  accessToken: string,
  currentPage: number
}

export const getOrders = ({accessToken, currentPage}: IGetOrder) => {
  return axios({
    method: 'GET',
    url: `${url}api/db/order?&limit=${ordersLimit}&page=${currentPage}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  })
}
