import { defineStore } from 'pinia'

interface Ires {
    accessToken: string;
    user: {
        name: string
        gender: string
        email: string
        walletAddress: string
        profilePhotoUrl: string
        country: string
        city: string
        birthday: string
        invitationCode: string
        phone: string
        userPointA: number
        userPointB: number
    };
}

const useUserStore = defineStore('User', {
    state: () => ({
        user: {
            access_token: '',
            name: '',
            gender: '',
            email: '',
            wallet_address: '',
            profile_photo_url: '',
            country: '',
            city: '',
            birthday: '',
            invitation_code: '',
            phone: '',
            user_pointA: 0,
            user_pointB: 0
        }
    }),
    getters: {},
    actions: {
        storeLogin(res: any) {
            const { data }: { data: Ires } = res
            this.user.access_token = data.accessToken,
                this.user.name = data.user.name,
                this.user.gender = data.user.gender,
                this.user.email = data.user.email,
                this.user.wallet_address = data.user.walletAddress,
                this.user.profile_photo_url = data.user.profilePhotoUrl,
                this.user.country = data.user.country,
                this.user.city = data.user.city,
                this.user.birthday = data.user.birthday,
                this.user.invitation_code = data.user.invitationCode,
                this.user.phone = data.user.phone,
                this.user.user_pointA = data.user.userPointA,
                this.user.user_pointB = data.user.userPointB
        }
    },
})

export default useUserStore