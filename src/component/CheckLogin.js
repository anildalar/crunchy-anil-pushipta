import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import {reset as resetUser} from '../app/reducers/userSlice'
function CheckLogin() {
   
    const dispatch=useDispatch();
    const token=useSelector((state) => state.user.jwtToken)
    try{
        const decoded = jwt_decode(token);
        return true;
    }catch(error){
        localStorage.clear();
        dispatch(resetUser);
        return false;
    }

}

export default CheckLogin
