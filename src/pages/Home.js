import React,{useEffect,useState} from 'react'
import GetDomain from '../serviceprovider/GetDomain';
import Login from './Login';
const { url, toDataUrl } = require("../helpers/helper");

const data = { domain: window.location.hostname };
const Home=()=> {

    const [domChack, setDomCheck] = useState(false);//crunchy@2021
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
                    localStorage.setItem('domainVerify',1);
                    localStorage.setItem('domainData',JSON.stringify(data));
                    localStorage.setItem('domainId',data.data.domainId);
                    localStorage.setItem('domainTitle',data.data.domainTitle);
                    localStorage.setItem('logo',url+'/'+data.data.path+data.data.logo);
                    toDataUrl(url+'/'+data.data.path+data.data.logo, function(myBase64) {
                        //console.log(myBase64); // myBase64 is the base64 string
                        localStorage.setItem('logoData',myBase64);
                    });
                }else{
                    localStorage.setItem('domainVerify',0);
                    localStorage.setItem('err',data.msg);
                }
                resolve('ok');
            }).catch((error) => {
                localStorage.setItem('domainVerify',0);
                localStorage.setItem('err',error);
                reject(error);
            });
        } catch (error) {
            localStorage.setItem('domainVerify',0);
            localStorage.setItem('err',error);
            reject(error);
        }
    });

    po.then((data)=>{
        //Consuming Code
        console.log('anil')
        setDomCheck(parseInt(localStorage.getItem('domainVerify')));
    }).catch((error)=>{
        console.log(error);
        console.log('mmeena')
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