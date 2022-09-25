import { defineStore } from 'pinia'

interface Ires {
    accessToken: string;
    user: {
        uuid: string;
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

interface Iupdate {
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
    uuid: string
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
            user_pointB: 0,
            uuid: ''
        }
    }),
    getters: {},
    actions: {
        storeLogin(res: any) {
            const { data }: { data: Ires } = res
            this.user.access_token = data?.accessToken,
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
                this.user.user_pointB = data.user.userPointB,
                this.user.uuid = data.user.uuid
        },
        updateLogin(res: any) {
            const { data }: { data: Iupdate } = res
            this.user.name = data.name,
                this.user.gender = data.gender,
                this.user.email = data.email,
                this.user.wallet_address = data.walletAddress,
                this.user.profile_photo_url = data.profilePhotoUrl,
                this.user.country = data.country,
                this.user.city = data.city,
                this.user.birthday = data.birthday,
                this.user.invitation_code = data.invitationCode,
                this.user.phone = data.phone,
                this.user.user_pointA = data.userPointA,
                this.user.user_pointB = data.userPointB
        }
    },
})

export default useUserStore