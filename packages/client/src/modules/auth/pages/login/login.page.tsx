import React, { ReactElement } from 'react'
import { ILogin } from '~/types/auth/login.type'
import { Form } from '~shared/components/form/form.component'
import { Input } from '~shared/components/input/input.component'
import AuthService from '~/services/auth.service'
import UserService from '~/services/user.service'
import { siteColors, useTheme } from '~shared/styles/theme.context'
import { buttonStyles } from './login.styles'

const authService = new AuthService()
const userService = new UserService()

export const Login = (): ReactElement => {
  const { theme, toggleTheme } = useTheme()

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
      <button onClick={toggleTheme}>change theme</button>
      <div
        style={{
          marginTop: '50px',
          marginLeft: '50px',
          width: '100px',
          height: '100px',
          background: siteColors[theme].main,
          color: siteColors[theme].textPrimary,
          borderRadius: '5px',
        }}
      >
        asdasd
        <p style={{ color: siteColors[theme].textSecondary }}>textSecondary</p>
        <button className={buttonStyles(theme)}>text</button>
      </div>
    </div>
  )
}
