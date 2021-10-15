const url="http://192.168.1.47:3000";

const fetchOption = { 
                        method: 'POST', // or 'PUT'
                        headers: {
                           'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                        }
                    }

module.exports = {url,fetchOption};
