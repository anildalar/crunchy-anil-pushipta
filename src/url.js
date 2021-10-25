

const url="http://173.249.39.43:3000";

const fetchOption = { 
                        method: 'POST', // or 'PUT'
                        headers: {
                           'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                        }
                    }
        const Toast= {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
     const SSLTypes = [
                        { value: '-1', label: 'Non secure' },
                        { value: '0', label: 'SSLv2' },
                        { value: '1', label: 'SSLv3' },
                        { value: '2', label: 'SSLv23' },
                        { value: '3', label: 'TLSv1' }
                    ];
module.exports = {url,fetchOption,Toast,SSLTypes};
