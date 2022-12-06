import { createSlice } from '@reduxjs/toolkit'

const initialState ={ 
    value: 'none!',
}

export const controllerSlice = createSlice({
    name: 'controller',
    initialState,
    reducers: {
      setUpUser: (state, action) => {
        state.value = action.payload
      },


      defuser: (state) => {
        console.log('defuser')
        
        state.value = 'def'
      },
    
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { defuser, setUpUser } 
        = controllerSlice.actions
  
  export default controllerSlice.reducer