const { url, toDataUrl } = require("../helpers/helper");

console.log(window.location.hostname);

const data = { domain: window.location.hostname };

function getDomain(){
    
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
    }).catch((error) => {
        localStorage.setItem('domainVerify',0);
        localStorage.setItem('err',error);
    });
}



module.exports = getDomain;