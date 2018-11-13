import axios from 'axios';

import config from '../config/config';


function getTwitterData(apiName, param) {
    const api = config.api[apiName].replace('%s', param);

    return axios.get(`${config.api.baseUrl}${api}${config.api.queryParams}`);
}


export default getTwitterData;