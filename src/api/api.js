import axios from 'axios';
import Qs from 'qs';
let base = '/op';

// demo
export const demo = params => { return axios.post(`${base}/demo/demo1/demo2`, Qs.stringify(params)) };