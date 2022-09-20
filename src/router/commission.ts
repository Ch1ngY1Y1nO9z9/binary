import CommissionTemplate from '/src/views/Commission/Index.vue';
import Credit from '/src/components/Commission/Credit.vue';
import Friends from '/src/components/Commission/Friends.vue';


const Commission = {
    path: '/commission',
    name: 'Commission',
    component: CommissionTemplate,
    children: [
        {
            path: 'credit',
            name: 'Credit',
            component: Credit
        },
        {
            path: 'friends',
            name: 'Friends',
            component: Friends
        }
    ]
}

export default Commission