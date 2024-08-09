import { AxiosResponse } from 'axios'
import HttpService from './http.service'
import { ILogin, ILoginResponse } from '~/types/auth/login.type'

class AuthService extends HttpService {
  constructor() {
    super()
  }

  public async login(loginCredentials: ILogin): Promise<AxiosResponse<ILoginResponse>> {
    return this.post({ url: 'auth/login', data: loginCredentials })
  }
}

export default AuthService
