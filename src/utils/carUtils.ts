const baseURL = process.env.REACT_APP_DEFAULT_URL

export const getCarImage = (path: string) => {
  return path.includes('base64') ? path : baseURL + path.slice(1)
}
