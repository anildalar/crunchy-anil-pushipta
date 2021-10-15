const baseUrl = 'http://192.168.1.47:3000';

let validateEmail = (userName)=>{
    const re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/;
    return re.test(String(userName).toLowerCase());
}

module.exports = baseUrl;