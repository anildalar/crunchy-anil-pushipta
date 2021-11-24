

const url = 'http://localhost:4000';

// const fetchOption = { 
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
//     }
// }

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
const HTTP_DLR_Type= [
    { value: '0', label: 'GET' },
    { value: '1', label: 'RECEIVED' }
];           
const HTTP_Response_Type= [
    { value: '0', label: 'OBJECT' },
    { value: '1', label: 'STRING' }
];   

const BindType= [
    { value: 'TX', label: 'Bind Transmitter' },
    { value: 'RX', label: 'Bind Receiver' },
    { value: 'TR', label: 'Bind Transceiver' }
]; 

const timeZone= [
    { label: "(GMT -12:00) Eniwetok, Kwajalein", value: "-12:00"},
    { label: "(GMT -11:00) Midway Island, Samoa", value: "-11:00"},
    { label: "(GMT -10:00) Hawaii", value: "-10:00"},
    { label: "(GMT -9:30) Taiohae", value: "-09:50"},
    { label: "(GMT -9:00) Alaska", value: "-09:00"},
    { label: "(GMT -8:00) Pacific Time (US &amp; Canada)", value: "-08:00"},
    { label: "(GMT -7:00) Mountain Time (US &amp; Canada)", value: "-07:00"},
    { label: "(GMT -6:00) Central Time (US &amp; Canada), Mexico City", value: "-06:00"},
    { label: "(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima", value: "-05:00"},
    { label: "(GMT -4:30) Caracas", value: "-04:50"},
    { label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz", value: "-04:00"},
    { label: "(GMT -3:30) Newfoundland", value: "-03:50"},
    { label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown", value: "-03:00"},
    { label: "(GMT -2:00) Mid-Atlantic", value: "-02:00"},
    { label: "(GMT -1:00) Azores, Cape Verde Islands", value: "-01:00", selected:"selected"},
    { label: "(GMT) Western Europe Time, London, Lisbon, Casablanca", value: "+00:00"},
    { label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value: "+01:00"},
    { label: "(GMT +2:00) Kaliningrad, South Africa", value: "+02:00"},
    { label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg", value: "+03:00"},
    { label: "(GMT +3:30) Tehran", value: "+03:50"},
    { label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04:00"},
    { label: "(GMT +4:30) Kabul", value: "+04:50"},
    { label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent", value: "+05:00"},
    { label: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi", value: "+05:50"},
    { label: "(GMT +5:45) Kathmandu, Pokhara", value: "+05:75"},
    { label: "(GMT +6:00) Almaty, Dhaka, Colombo", value: "+06:00"},
    { label: "(GMT +6:30) Yangon, Mandalay", value: "+06:50"},
    { label: "(GMT +7:00) Bangkok, Hanoi, Jakarta", value: "+07:00"},
    { label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value: "+08:00"},
    { label: "(GMT +8:45) Eucla", value: "+08:75"},
    { label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value: "+09:00"},
    { label: "(GMT +9:30) Adelaide, Darwin", value: "+09:50"},
    { label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok", value: "+10:00"},
    { label: "(GMT +10:30) Lord Howe Island", value: "+10:50"},
    { label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia", value: "+11:00"},
    { label: "(GMT +11:30) Norfolk Island", value: "+11:50"},
    { label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka", value: "+12:00"},
    { label: "(GMT +12:45) Chatham Islands", value: "+12:75"},
    { label: "(GMT +13:00) Apia, Nukualofa", value: "+13:00"},
    { label: "(GMT +14:00) Line Islands, Tokelau", value: "+14:00"}
];

const langauges = [
    { value: 'AF', label: 'Afrikaans' },
    { value: 'SQ', label: 'Albanian' },
    { value: 'AR', label: 'Arabic' },
    { value: 'HY', label: 'Armenian' },
    { value: 'EU', label: 'Basque' },
    { value: 'BN', label: 'Bengali' },
    { value: 'BG', label: 'Bulgarian' },
    { value: 'CA', label: 'Catalan' },
    { value: 'KM', label: 'Cambodian' },
    { value: 'ZH', label: 'Chinese' },
    { value: 'HR', label: 'Croatian' },
    { value: 'CS', label: 'Czech' },
    { value: 'DA', label: 'Danish' },
    { value: 'NL', label: 'Dutch' },
    { value: 'EN', label: 'English' },
    { value: 'ET', label: 'Estonian' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finnish' },
    { value: 'FR', label: 'French' },
    { value: 'KA', label: 'Georgian' },
    { value: 'DE', label: 'German' },
    { value: 'EL', label: 'Greek' },
    { value: 'GU', label: 'Gujarati' },
    { value: 'HE', label: 'Hebrew' },
    { value: 'HI', label: 'Hindi' },
    { value: 'HU', label: 'Hungarian' },
    { value: 'IS', label: 'Icelandic' },
    { value: 'ID', label: 'Indonesian' },
    { value: 'GA', label: 'Irish' },
    { value: 'IT', label: 'Italian' },
    { value: 'JA', label: 'Japanese' },
    { value: 'JW', label: 'Javanese' },
    { value: 'KO', label: 'Korean' },
    { value: 'LA', label: 'Latin' },
    { value: 'LV', label: 'Latvian' },
    { value: 'LT', label: 'Lithuanian' },
    { value: 'MK', label: 'Macedonian' },
    { value: 'MS', label: 'Malay' },
    { value: 'ML', label: 'Malayalam' },
    { value: 'MT', label: 'Maltese' },
    { value: 'MI', label: 'Maori' },
    { value: 'MR', label: 'Marathi' },
    { value: 'MN', label: 'Mongolian' },
    { value: 'NE', label: 'Nepali' },
    { value: 'NO', label: 'Norwegian' },
    { value: 'FA', label: 'Persian' },
    { value: 'PL', label: 'Polish' },
    { value: 'PT', label: 'Portuguese' },
    { value: 'PA', label: 'Punjabi' },
    { value: 'QU', label: 'Quechua' },
    { value: 'RO', label: 'Romanian' },
    { value: 'RU', label: 'Russian' },
    { value: 'SM', label: 'Samoan' },
    { value: 'SR', label: 'Serbian' },
    { value: 'SK', label: 'Slovak' },
    { value: 'SL', label: 'Slovenian' },
    { value: 'ES', label: 'Spanish' },
    { value: 'SW', label: 'Swahili' },
    { value: 'SV', label: 'Swedish' },
    { value: 'TA', label: 'Tamil' },
    { value: 'TT', label: 'Tatar' },
    { value: 'TE', label: 'Telugu' },
    { value: 'TH', label: 'Thai' },
    { value: 'BO', label: 'Tibetan' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TR', label: 'Turkish' },
    { value: 'UK', label: 'Ukrainian' },
    { value: 'UR', label: 'Urdu' },
    { value: 'UZ', label: 'Uzbek' },
    { value: 'VI', label: 'Vietnamese' },
    { value: 'CY', label: 'Welsh' },
    { value: 'XH', label: 'Xhosa' },
      ];


// const baseUrl = 'http://173.249.39.43:3000';
/** toaster option heare  **/
const toastOption={
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    newestOnTop: true,
    progress: undefined,
};

function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
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
                    //fetchOption,
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
                    toDataUrl,
                    toastOption,
                    langauges                  
                };
