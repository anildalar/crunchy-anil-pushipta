// const baseUrl = 'http://192.168.1.47:3000';
//const baseUrl = 'http://192.168.1.47:3000';
//const url = 'http://173.249.39.43:3000'; //173.249.39.43

// let validateEmail = (userName)=>{
//     const re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.@\/]/;
//     return re.test(String(userName).toLowerCase());
// }



const url = 'http://173.249.39.43:3000'


const fetchOption = {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
    }
}

const yesNo = [
    { value: '0', label: 'NO' },
    { value: '1', label: 'YES' }
];

const Bill_Mode = [
    { value: '0', label: 'Credit' },
    { value: '1', label: 'MCCMNC' }
];
const ChargeType = [
    { value: '0', label: 'On Submition' },
    { value: '1', label: 'On Delivery' }
];
const SSLTypes = [
    { value: '-1', label: 'Non secure' },
    { value: '0', label: 'SSLv2' },
    { value: '1', label: 'SSLv3' },
    { value: '2', label: 'SSLv23' },
    { value: '3', label: 'TLSv1' }
];


const httpParam=[
    { value:"0",label:'Quert'},
    { value:"1",label:'Data'},
    { value:"2",label:'JSON'}
]
const Active=[
    {value:"0",label:'Active'},
    { value:'1',label:'Inactive'}
]
const LogLevels = [
    { value: '0', label: 'Debug' },
    { value: '1', label: 'Info' },
    { value: '2', label: 'Warning' },
    { value: '3', label: 'Error' },
    { value: '4', label: 'Panic' },
    { value: '5', label: 'Verbose' }
]

const HTTP_DLR_Param_Types = [
    { value: '0', label: 'Query' },
    { value: '1', label: 'JSON' },
    { value: '2', label: 'FormData' }
];
const HTTP_DLR_Method = [
    { value: '0', label: 'GET' },
    { value: '1', label: 'POST' }
];
const HTTP_DLR_Type = [
    { value: '0', label: 'GET' },
    { value: '1', label: 'RECEIVED' }
];
const HTTP_Response_Type = [
    { value: '0', label: 'OBJECT' },
    { value: '1', label: 'STRING' }
];

const BindType = [
    { value: 'TX', label: 'Bind Transmitter' },
    { value: 'RX', label: 'Bind Receiver' },
    { value: 'TR', label: 'Bind Transceiver' }
];

const timeZone = [
    { label: "(GMT -12:00) Eniwetok, Kwajalein", value: "-12:00" },
    { label: "(GMT -11:00) Midway Island, Samoa", value: "-11:00" },
    { label: "(GMT -10:00) Hawaii", value: "-10:00" },
    { label: "(GMT -9:30) Taiohae", value: "-09:50" },
    { label: "(GMT -9:00) Alaska", value: "-09:00" },
    { label: "(GMT -8:00) Pacific Time (US &amp; Canada)", value: "-08:00" },
    { label: "(GMT -7:00) Mountain Time (US &amp; Canada)", value: "-07:00" },
    { label: "(GMT -6:00) Central Time (US &amp; Canada), Mexico City", value: "-06:00" },
    { label: "(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima", value: "-05:00" },
    { label: "(GMT -4:30) Caracas", value: "-04:50" },
    { label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz", value: "-04:00" },
    { label: "(GMT -3:30) Newfoundland", value: "-03:50" },
    { label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown", value: "-03:00" },
    { label: "(GMT -2:00) Mid-Atlantic", value: "-02:00" },
    { label: "(GMT -1:00) Azores, Cape Verde Islands", value: "-01:00", selected: "selected" },
    { label: "(GMT) Western Europe Time, London, Lisbon, Casablanca", value: "+00:00" },
    { label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value: "+01:00" },
    { label: "(GMT +2:00) Kaliningrad, South Africa", value: "+02:00" },
    { label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg", value: "+03:00" },
    { label: "(GMT +3:30) Tehran", value: "+03:50" },
    { label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04:00" },
    { label: "(GMT +4:30) Kabul", value: "+04:50" },
    { label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent", value: "+05:00" },
    { label: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi", value: "+05:50" },
    { label: "(GMT +5:45) Kathmandu, Pokhara", value: "+05:75" },
    { label: "(GMT +6:00) Almaty, Dhaka, Colombo", value: "+06:00" },
    { label: "(GMT +6:30) Yangon, Mandalay", value: "+06:50" },
    { label: "(GMT +7:00) Bangkok, Hanoi, Jakarta", value: "+07:00" },
    { label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value: "+08:00" },
    { label: "(GMT +8:45) Eucla", value: "+08:75" },
    { label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value: "+09:00" },
    { label: "(GMT +9:30) Adelaide, Darwin", value: "+09:50" },
    { label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok", value: "+10:00" },
    { label: "(GMT +10:30) Lord Howe Island", value: "+10:50" },
    { label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia", value: "+11:00" },
    { label: "(GMT +11:30) Norfolk Island", value: "+11:50" },
    { label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka", value: "+12:00" },
    { label: "(GMT +12:45) Chatham Islands", value: "+12:75" },
    { label: "(GMT +13:00) Apia, Nukualofa", value: "+13:00" },
    { label: "(GMT +14:00) Line Islands, Tokelau", value: "+14:00" }
];

// const baseUrl = 'http://173.249.39.43:3000';


function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}


module.exports = {
    url,
    fetchOption,
    Bill_Mode,
    ChargeType,
    SSLTypes,
    LogLevels,
    HTTP_DLR_Param_Types,
    HTTP_DLR_Method,
    HTTP_DLR_Type,
    HTTP_Response_Type,
    timeZone,
    yesNo,
    BindType,
    Active,
    httpParam,
    toDataUrl
};
