import TradingTemplate from '../views/Trading/Index.vue';
import TradingIndex from '/src/components/Trading/TradingIndex.vue';
import TradingList from '/src/components/Trading/TradingList.vue';
import PointTrading from '/src/components/Trading/PointTrading.vue';
import Reservation from '/src/components/Trading/Reservation.vue';

const Trading = {
    path: '/trading_center',
    name: 'TradingTemplate',
    component: TradingTemplate,
    children: [
        {
            path: 'index',
            name: 'TradingIndex',
            component: TradingIndex
        },
        {
            path: 'list',
            name: 'TradingList',
            component: TradingList,
        },
        {
            path: 'pointTrading',
            name: 'PointTrading',
            component: PointTrading,
        },
        {
            path: 'reservation/:id',
            name: 'Reservation',
            component: Reservation,
        }
    ]
}

export default Trading