import axios from 'axios'
const BASE_URL = 'http://main.oaostand.xyz'

// 建立axios request的實例
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// header先寫好預設值, 若有需要更改再從呼叫時去傳入覆蓋掉預設, 像是接收html結構就要改成'text/html', 或者其他設定