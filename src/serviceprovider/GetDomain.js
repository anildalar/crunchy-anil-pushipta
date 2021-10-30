const { url, toDataUrl } = require("../helpers/helper");

// const data = { domain: window.location.hostname };
const data = { domain: 'crunchysms.com' };

function getDomain(){
    
    fetch(url+'/domain/verify', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.domain),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //alert(JSON.stringify(data));
        localStorage.setItem('domainData',JSON.stringify(data));
        localStorage.setItem('domainId',data.data.domainId);
        localStorage.setItem('domainTitle',data.data.domainTitle);
        localStorage.setItem('logo',url+'/'+data.data.path+data.data.logo);
        toDataUrl(url+'/'+data.data.path+data.data.logo, function(myBase64) {
            //console.log(myBase64); // myBase64 is the base64 string
            localStorage.setItem('logoData',myBase64);
        });

        
    }).catch((error) => {
        console.error('Error:', error);
    });
}



module.exports = getDomain;