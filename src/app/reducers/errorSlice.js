
import { createSlice } from '@reduxjs/toolkit';


const initialData={
    msg:"",
    err:{
        
    }
};

export const errorSlice = createSlice({
    name:"error",
    initialState:initialData,
    reducers: {
        addErr:(state, action)=>{
            state.err = action.payload
        },
        errMsg:(state, action)=>{
            state.msg = action.payload
        },
        reset: state => initialData
    }
});

export const { addErr,errMsg,reset} = errorSlice.actions

export default errorSlice.reducer