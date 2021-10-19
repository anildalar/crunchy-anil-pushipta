const url="http://173.249.39.43:3000";

const fetchOption = { 
                        method: 'POST', // or 'PUT'
                        headers: {
                           'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                        }
                    }

module.exports = {url,fetchOption};
