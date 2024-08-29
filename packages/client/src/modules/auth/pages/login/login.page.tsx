import React, { ReactElement } from 'react'
import { ILogin } from '~/types/auth/login.type'
import { Form } from '~shared/components/form/form.component'
import { Input } from '~shared/components/input/input.component'
import { siteColors, useTheme } from '~shared/styles/theme.context'
import { Button } from './login.styles'
import { useLoginMutation } from '~store/api/authApi'
import { useAppDispatch } from '~store/store'
import { login as loginAction } from '~store/features/userSlice'
import { useLazyGetUsersQuery } from '~store/api/userApi'
import { AppWrapper } from '~shared/components/app-wrapper/app-wrapper.component'

type LoginResponse = {
  data: {
    message: string
    token: {
      accessToken: string
    }
  }
}

export const Login = (): ReactElement => {
  const { theme, toggleTheme } = useTheme()
  const [login] = useLoginMutation()
  const [triggerGetUsers] = useLazyGetUsersQuery()
  const dispatch = useAppDispatch()

  // const {data, isSuccess} = useGetSototamQuery()

  const handleSubmitForm = async (loginCredentials: ILogin): Promise<void> => {
    try {
      // const { data: loginResponse } = await authService.login(loginCredentials)
      const { data: loginResponse } = (await login(loginCredentials)) as LoginResponse
      dispatch(loginAction(loginResponse.token.accessToken))
      console.log('login succes', loginResponse)
      // localStorage.setItem('accessToken', loginResponse.token.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  const handleGetUsers = async (): Promise<void> => {
    try {
      const { data } = await triggerGetUsers()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AppWrapper>
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
        <Button theme={theme}>text</Button>
      </div>
    </AppWrapper>
  )
}
