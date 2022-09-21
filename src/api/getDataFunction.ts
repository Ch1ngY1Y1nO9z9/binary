import axios from 'axios'
import store, { pinia } from "../store";
import { storeToRefs } from "pinia";

const BASE_URL = `${import.meta.env.VITE_TABLET_HOST}api`

const useUserStore = store.useUserStore(pinia);
const { user } = useUserStore;

// 建立axios request的實例
export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'bearer ' + user.access_token
    }
})

// header先寫好預設值, 若有需要更改再從呼叫時去傳入覆蓋掉預設, 像是接收html結構就要改成'text/html', 或者其他設定