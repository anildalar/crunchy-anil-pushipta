const baseUrl = 'http://173.249.39.43:3000';

let validateEmail = (userName)=>{
    const re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/;
    return re.test(String(userName).toLowerCase());
}

module.exports = baseUrl;