import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
    state: () => ({
        user: {
            access_token: '',
            name: 'dummy01',
            gender: 'male',
            email: 'imtestingtheregister@gmail.com',
            wallet_address: '',
            profile_photo_url: '',
            country: '台灣',
            city: '台中市',
            birthday: '1971-01-01',
            invitation_code: '',
            phone: '',
            user_pointA: 0,
            user_pointB: 0
        }
    }),
    getters: {},
    actions: {
        storeLogin(res) {
            this.user.access_token = res.accessToken,
                this.user.name = res.user.name,
                this.user.gender = res.user.gender,
                this.user.email = res.user.email,
                this.user.wallet_address = res.user.walletAddress,
                this.user.profile_photo_url = res.user.profilePhotoUrl,
                this.user.country = res.user.country,
                this.user.city = res.user.city,
                this.user.birthday = res.user.birthday,
                this.user.invitation_code = res.user.invitationCode,
                this.user.phone = res.user.phone,
                this.user.user_pointA = res.user.userPointA,
                this.user.user_pointB = res.user.userPointB
        }
    },
})

export default useUserStore