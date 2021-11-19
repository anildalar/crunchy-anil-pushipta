
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
        }
    }
});

export const { addErr,errMsg} = errorSlice.actions

export default errorSlice.reducer