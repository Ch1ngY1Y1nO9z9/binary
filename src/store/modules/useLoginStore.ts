import { defineStore } from 'pinia'


const useLoginStore = defineStore('Login',{
    state: () => ({
        login: false
    }),
    getters: {},
    actions: {
        userLogin() {
            this.login = true
        },
        userLogout() {
            this.login = false
        }
    },
    persist: true
})

export default useLoginStore