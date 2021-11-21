import React from 'react'
import { useHistory } from 'react-router';

const  Logout= ()=>{
    const history=useHistory();
    localStorage.clear();
    dispatch(resetUser());
    history.push("/");
}

export default Logout
