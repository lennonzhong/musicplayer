import { jsonp } from './../js/jsonp';
import * as config from './../js/config';

export function getRecommand() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?';

    let data = {
        "platform": "h5",
        "uin": 0,
        "needNewCode": 1
    }

    for (var key in config.params) {
        data[key] = config.params[key];
    }

    return jsonp(url, data, config.options);
}