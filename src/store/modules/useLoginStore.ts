import { defineStore } from 'pinia'


const useLoginStore = defineStore('Login',{
    state: () => ({
        login: false
    }),
    getters: {},
    actions: {
        userLogin() {
            this.login = !this.login
        }
    },
})

export default useLoginStore