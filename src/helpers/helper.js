const baseUrl = 'http://173.249.39.43:3000';

// let validateEmail = (userName)=>{
//     const re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/;
//     return re.test(String(userName).toLowerCase());
// }

const url = 'http://173.249.39.43:3000/admin/phonebook/group/create'
const fetchOption = { 
    method: 'POST', // or 'PUT'
    headers: {
       'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
    }
}

module.exports = {baseUrl,url,fetchOption};