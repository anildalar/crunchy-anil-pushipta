//const baseUrl = 'http://192.168.1.47:3000';
const url = 'http://192.168.1.47:3000'; //173.249.39.43

let validateEmail = (userName)=>{
    const re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/;
    return re.test(String(userName).toLowerCase());
}

const fetchOption = { 
                        method: 'POST', // or 'PUT'
                        headers: {
                           'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                        }
                    }

const SSLTypes = {
    "-1":"Non secure",
    "0":"SSLv2",
    "1":"SSLv3",
    "2":"SSLv23",
    "3":"TLSv1"
}                    
const LogLevels = {
    "0":"Debug",
    "1":"Info",
    "2":"Warning",
    "3":"Error",
    "4":"Panic",
    "5":"Verbose",
}            

module.exports = { url,fetchOption,SSLTypes,LogLevels};
