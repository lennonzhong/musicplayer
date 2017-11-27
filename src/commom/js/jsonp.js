import originJSONP from 'jsonp';

export function jsonp(url, data, option) {
    return new Promise((resolve, reject) => {
        let dataStr = getDataStr(data);
        url += dataStr;
        originJSONP(url, option, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

function getDataStr(data) {
    let str = '';
    if (data == '' || data == undefined) {
        return;
    } else {
        str+='?'
        for (const key in data) {
            str += '&' + key + '=' + data[key];
        }
    }
    return str?str.substring(1):'';
}