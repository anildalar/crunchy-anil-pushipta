import { createSlice } from '@reduxjs/toolkit'
const initialData = {
    jwtToken:(localStorage.getItem('jwtToken'))?localStorage.getItem('jwtToken'):'',
    user:(localStorage.getItem('user'))?localStorage.getItem('user'):{},
    role:(localStorage.getItem('role'))?localStorage.getItem('role'):'',
    config:(localStorage.getItem('config'))?localStorage.getItem('config'):{},
};

export const userSlice = createSlice({
    name: 'user',
    initialState:initialData,
    reducers: {
        setToken:(state, action)=>{
            state.jwtToken=action.payload;
        },
        setUser:(state, action)=>{
            state.user=action.payload;
        },
        setConfig: (state, action)=>{
            state.config = action.payload;
        },
        setRole:(state, action)=>{
            state.role=action.payload;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setToken, setUser,setConfig,setRole} = userSlice.actions
  
  export default userSlice.reducer