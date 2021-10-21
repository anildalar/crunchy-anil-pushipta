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
    "0":"debug",
    "1":"info",
    "2":"warning",
    "3":"error",
    "4":"panic",
    "5":"verbose",
}            

module.exports = { url,fetchOption,SSLTypes,LogLevels};
