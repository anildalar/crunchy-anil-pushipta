const baseUrl = require("../helpers/helper");

const data = { domain: window.location.hostname };

function getDomain(){
    
    fetch(baseUrl+'/domain/verify', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //alert(JSON.stringify(data));
        localStorage.setItem('domainData',JSON.stringify(data));
        localStorage.setItem('domainTitle',data.data.domainTitle);
        localStorage.setItem('logo',baseUrl+'/'+data.data.path+data.data.logo);
    }).catch((error) => {
        console.error('Error:', error);
    });
}



module.exports = getDomain;