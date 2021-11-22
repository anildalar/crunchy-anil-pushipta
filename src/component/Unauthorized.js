import React from 'react'
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// import {reset as resetUser} from '../app/reducers/userSlice';
// import {addErr,errMsg} from '../app/reducers/errorSlice';

function Unauthorized(props) {
    const dispatch =useDispatch;
    // const history = useHistory()
    // console.log('hello');
    
    if(props.status==403){
        return  403;
    //     localStorage.removeItem('role');
    //     localStorage.removeItem('user');
    //     localStorage.removeItem('config');
    //     dispatch(resetUser());
    //     dispatch(addErr(props.err));
    //     dispatch(errMsg(props.msg));
    //     history.push('/login');
    //     //console.log('from unthodakfjdklfj')
    }
}

export default Unauthorized
