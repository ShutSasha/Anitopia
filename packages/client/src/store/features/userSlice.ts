import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '~/types/user/user.type'

export interface IUserState {
  user: IUser | null
  accessToken: string
}

const initialState: IUserState = {
  user: null,
  accessToken: '',
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
  selectors: {
    getUserToken: (state) => state.accessToken,
  },
})

export default userSlice

export const { login, logout, setUser, setAccessToken } = userSlice.actions
export const { getUserToken } = userSlice.selectors
