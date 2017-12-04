import { jsonp } from './../js/jsonp';
import * as config from './../js/config';

export function searchResult(keyword) {
    let url = 'http://mobilecdn.kugou.com/api/v3/search/song?';
    let data = {
        format: jsonp,
        keyword: keyword,
        page: 1,
        pagesize: 30,
        showtype: 1,
    }
    return jsonp(url,data,config.options);
}