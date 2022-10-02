import Index from '../views/Stake/Index.vue';
import Order from '../views/Stake/Order.vue';


const StakeIndex = {
    path: '/stake',
    name: 'StakeIndex',
    component: Index
}

const StakeOrder = {
    path: '/stake/order/id',
    name: 'StakeOrder',
    component: Order
}

export default { StakeIndex, StakeOrder }