import { createRouter, createWebHistory } from 'vue-router'
import Index from '/src/views/Index/Index.vue'

// 整理路由
import User from './login'
import Account from './account'
import News from './news'
import userCentreRoutes from './userCentre'
import Purse from './purse'
import Collect from './collect'
import MyStake from './myStake'
import Commission from './commission'
import Events from './events'
import Trading from './trading'
import Results from './results'
import Stake from './stake'

// 宣告各頁面的路由
const { Login, Register, Unvertify, Vertify, ForgetPassword, ResetPassword } = User
const { NewsIndex, NewsList, NewsContent } = News
const { StakeIndex, StakeOrder } = Stake

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
  NewsIndex,
  NewsList,
  NewsContent,
  Account,
  Collect,
  MyStake,
  Commission,
  Events,
  Trading,
  Results,
  StakeIndex,
  StakeOrder
]

export default createRouter({ history, routes })