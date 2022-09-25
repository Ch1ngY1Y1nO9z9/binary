import LoginTemplate from '/src/views/Login/Login.vue'
import RegisterTemplate from '/src/views/Login/Register.vue'
import UnvertifyTemplate from '/src/views/Login/Unvertify.vue'
import ForgetPasswordTemplate from '/src/views/Login/ForgetPassword.vue'
import VertifyTemplate from '/src/views/Login/Vertify.vue'
import ResetPasswordTemplate from '/src/views/Login/ResetPassword.vue'



const Login = {
    path: '/login',
    name: 'Login',
    component: LoginTemplate
}
const Register = {
    path: '/register',
    name: 'Register',
    component: RegisterTemplate
}
const Unvertify = {
    path: '/unvertify',
    name: 'Unvertify',
    component: UnvertifyTemplate
}
const Vertify = {
    path: '/email_vertify',
    name: 'Vertify',
    component: VertifyTemplate
}
const ForgetPassword = {
    path: '/forgotPassword',
    name: 'ForgetPassword',
    component: ForgetPasswordTemplate
}
const ResetPassword = {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPasswordTemplate
}

const User = { Login, Register, Unvertify, Vertify, ForgetPassword, ResetPassword }

export default User