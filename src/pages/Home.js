import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './Login';
import { domainVerify,add,setLogo} from '../app/reducers/domainSlice'
import {addErr,errMsg} from '../app/reducers/errorSlice'
import Errorpage from './Errorpage';
import CheckLogin from '../component/CheckLogin';
const { url, toDataUrl } = require("../helpers/helper");
const data = { domain: window.location.hostname };


const Home=()=> {
    
    const domain = useSelector((state) => state.domain)
    const error = useSelector((state) => state.error)
    const dispatch =useDispatch();
    const [verify,setVerify]=useState(0)
    useEffect(() => {
        let po = new Promise(function(resolve,reject) {
            //Producing Code { The code which may take time }
            try {
                fetch(url+'/domain/verify', {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json',},
                    body: JSON.stringify(data),
                }).then(response => response.json())
                .then(data => {
                    if(data.status == 200){
                        dispatch(domainVerify(1));
                        setVerify(1);
                        dispatch(add(data.data));
                        localStorage.setItem('domainVerify',1);
                        localStorage.setItem('domainData',JSON.stringify(data.data));
                        const logo=url+'/'+data.data.path+data.data.logo;
                        localStorage.setItem('logo',logo);
                        dispatch(setLogo(logo));
                    }else{
                        setVerify(0)
                        localStorage.setItem('domainVerify',0);
                        dispatch(domainVerify(0));
                        dispatch(errMsg(data.msg))
                    }
                    resolve('ok');
                }).catch((error) => {
                    localStorage.setItem('domainVerify',0);
                    dispatch(domainVerify(0));
                    setVerify(0)
                    dispatch(errMsg("Request can't be completed, please contact support team."))
                    dispatch(addErr(error))
                    reject(error);
                });
            } catch (error) {
                localStorage.setItem('domainVerify',0);
                dispatch(domainVerify(0));
                setVerify(0)
                //dispatch(addErr(error));
                dispatch(errMsg("Request can't be completed, please support team."))
                reject(error);
            }
        });

        po.then((data)=>{ }).catch((error)=>{
            console.log(error);
        });
    },[])
    // return (domChack)?:null;
    if(verify){
        return ( <Login/> )
    }else{
        return ( <Errorpage/> );
    }
}
export default Home;