export interface ILogin {
  readonly email: string
  readonly password: string
}

export interface ILoginResponse {
  readonly message: string
  readonly token: { accessToken: string }
}
