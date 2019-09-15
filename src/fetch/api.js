import qs from 'qs';
const baseUrl = 'http://127.0.0.1:5000';
export default function(reqData) {
    const url = baseUrl + reqData.url;
    let body = '';
    let method = 'GET';
    const headers = {
        credentials: 'omit',
        'Content-Type': 'application/json'
    };
    if (reqData.contentType === 'ajax') {
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    if (reqData.method) {
        method = reqData.method.toUpperCase();
        body = qs.stringify(reqData.data);
    } else {
        body = JSON.stringify(reqData.data);
    }

    return fetch(url, {
        method,
        body,
        headers
    }).then(res => res.json())
        .catch(err => console.log('api: ' + err))
}