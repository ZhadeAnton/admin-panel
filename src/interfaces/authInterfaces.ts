export interface IAuthCredantionals {
  username: string,
  password: string
}

export interface IAuthSuccess {
  accessToken: string,
  expiresIn: number,
  refreshToken: string,
  tokenType: string,
  userId: string
}
