import { createSlice } from '@reduxjs/toolkit'

const initialData = {
  verify:(localStorage.getItem('domainVerify'))?localStorage.getItem('domainVerify'):0,
  data:(localStorage.getItem('domainData'))?localStorage.getItem('domainData'):{},
  logo:(localStorage.getItem('logo'))?localStorage.getItem('logo'):'',
};
const resetData={
  verify:0,
  data:{},
  logo:'',
};
export const domainSlice = createSlice({
  name: 'domain',
  initialState:initialData,
  reducers: {
    add: (state, action) => {
      state.data=action.payload
    },
    remove: (state) => {
      state.value -= 1
    },
    update: (state, action) => {
      state.value += action.payload
    },
    domainVerify: (state, action)=>{
        state.verify = action.payload
    },
    setLogo: (state, action)=>{
        state.logo = action.payload
    },
    reset: state => resetData
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, update,domainVerify,setLogo,reset} = domainSlice.actions

export default domainSlice.reducer