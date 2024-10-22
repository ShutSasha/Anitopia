import { AxiosResponse } from 'axios'
import HttpService from './http.service'

class UserService extends HttpService {
  constructor() {
    super()
  }

  public async getAllUsers(): Promise<AxiosResponse> {
    return this.get({ url: 'users' })
  }
}

export default UserService
