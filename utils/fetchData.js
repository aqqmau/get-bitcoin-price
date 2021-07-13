let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api) {
    return new Promise( function(resolve, reject) {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = function() {
            if(xhttp.readyState === 4) {
                (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('error ', url_api));
            }
        };
        xhttp.send();
    });
}

module.exports = fetchData;