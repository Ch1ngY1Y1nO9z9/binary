import { createRouter, createWebHistory } from 'vue-router'
import Index from '/src/views/Index/Index.vue'

// 整理路由
import User from './login'
import Account from './account'
import NewsRoutes from './news'
import userCentreRoutes from './userCentre'
import Purse from './purse'
import Collect from './collect'
import MyStake from './myStake'
import Commission from './commission'
import Events from './events'

// 宣告各頁面的路由
const { Login, Register, Unvertify, Vertify, ForgetPassword, ResetPassword } = User

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  Login,
  Register,
  Unvertify,
  Vertify,
  ForgetPassword,
  ResetPassword,
  userCentreRoutes,
  Purse,
  NewsRoutes,
  Account,
  Collect,
  MyStake,
  Commission,
  Events
]

export default createRouter({ history, routes })