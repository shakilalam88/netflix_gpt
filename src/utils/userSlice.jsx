import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'Users',
  initialState: null,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: (state, action) => null,
  },
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
