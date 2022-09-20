import UserProfile from '/src/views/Account/Index.vue'
import Index from "../components/Account/Index.vue";
import EditProfile from '../components/Forms/EditProfile.vue'
import ChangePassword from '../components/Forms/ChangePassword.vue'
import Result from "../components/Account/Result.vue";


const Account = {
    path: '/account',
    name: 'UserProfile',
    component: UserProfile,
    children: [
        {
            path: 'profile',
            name: 'ProfileIndex',
            component: Index
        },
        {
            path: 'profile_edit',
            name: 'ProfileEdit',
            component: EditProfile
        },
        {
            path: 'change_password',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: 'results',
            name: 'Results',
            component: Result
        }
    ]
}

export default Account