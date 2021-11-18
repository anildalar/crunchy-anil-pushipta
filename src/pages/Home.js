import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './Login';
import { domainVerify,add,setLogo} from '../app/reducers/domainSlice'

const { url, toDataUrl } = require("../helpers/helper");
const data = { domain: window.location.hostname };


const Home=()=> {
    const domain = useSelector((state) => state.domain)
    const [domChack, setDomCheck] = useState(false);//crunchy@2021
    const dispatch =useDispatch();
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
                    dispatch(add(data.data));
                    localStorage.setItem('domainVerify',1);
                    localStorage.setItem('domainData',data.data);
                    const logo=url+'/'+data.data.path+data.data.logo;
                    localStorage.setItem('logo',logo);
                    dispatch(setLogo(logo));
                    // toDataUrl(url+'/'+data.data.path+data.data.logo, function(myBase64) {
                    //     //console.log(myBase64); // myBase64 is the base64 string
                    //     localStorage.setItem('logoData',myBase64);
                    // });
                }else{
                    localStorage.setItem('domainVerify',0);
                    dispatch(domainVerify(0));
                    localStorage.setItem('err',data.msg);
                }
                resolve('ok');
            }).catch((error) => {
                localStorage.setItem('domainVerify',0);
                dispatch(domainVerify(0));
                localStorage.setItem('err',error);
                reject(error);
            });
        } catch (error) {
            localStorage.setItem('domainVerify',0);
            dispatch(domainVerify(0));
            localStorage.setItem('err',error);
            reject(error);
        }
    });

    po.then((data)=>{
        
    }).catch((error)=>{
        console.log(error);
    });
    
        
    }, [])
    // return (domChack)?:null;
    if(domChack){
        return (
            <Login/>
        )
    }else{
        return (
            <div className="container-fluid text-center pt-3"><h3>{localStorage.getItem('err')}</h3></div>
        );
    }
}
export default Home;