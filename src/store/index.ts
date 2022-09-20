import { createPinia } from "pinia";
import useLoginStore from './modules/useLoginStore'
import useUserStore from './modules/useUserStore'

export const pinia = createPinia()

export default {
    useLoginStore,
    useUserStore,
}

