import React, { ReactElement } from 'react'
import { ILogin } from '~/types/auth/login.type'
import { Form } from '~shared/components/form/form.component'
import { Input } from '~shared/components/input/input.component'
import AuthService from '~/services/auth.service'
import UserService from '~/services/user.service'

const authService = new AuthService()
const userService = new UserService()

export const Login = (): ReactElement => {
  const handleSubmitForm = async (loginCredentials: ILogin): Promise<void> => {
    try {
      const { data: loginResponse } = await authService.login(loginCredentials)
      localStorage.setItem('accessToken', loginResponse.token.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  const handleGetUsers = async (): Promise<void> => {
    try {
      const response = await userService.getAllUsers()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Form handleSubmitForm={handleSubmitForm}>
        <Input name='email' placeholder='email' type='email' />
        <Input name='password' placeholder='password' type='password' />
        <button type='submit'>Submit</button>
      </Form>
      <button onClick={handleGetUsers}>get users</button>
    </div>
  )
}
