import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import {reset as resetUser} from '../app/reducers/userSlice'
function CheckLogin() {
   
    const token=useSelector((state) => state.user.jwtToken)
    const dispatch=useDispatch();
    try{
        const decoded = jwt_decode(token);
        return true;
    }catch(error){
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        localStorage.removeItem('config');
        dispatch(resetUser);
        return false;
    }

}

export default CheckLogin
