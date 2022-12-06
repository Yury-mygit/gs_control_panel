import { createSlice } from '@reduxjs/toolkit'

const initialState ={ 
    user: 'default',
    loggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logIn: (state, action) => {
        state.user = action.payload
        state.loggedIn = true

        localStorage.setItem('admin', action.payload);
      },


      logOut: (state) => {
        state.user = 'default'
        state.loggedIn = false
        localStorage.removeItem('admin');
      },
    
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { logIn, logOut } 
        = userSlice.actions
  
  export default userSlice.reducer