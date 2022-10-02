import MyStackTemplate from '/src/views/MyStake/Index.vue';
import MyFollow from '/src/components/MyStake/MyFollow.vue';
import Track from '/src/components/MyStake/Track.vue';
import Schedule from '/src/components/MyStake/Schedule.vue';
import ScheduleDetail from '/src/components/MyStake/ScheduleDetail.vue';
import MyFollowEdit from '/src/components/MyStake/MyFollowEdit.vue';
import MyFollowDetail from '/src/components/MyStake/MyFollowDetail.vue';
import MyFollowCancel from '/src/components/MyStake/MyFollowCancel.vue';


const myStake = {
    path: '/myStake',
    name: 'myStake',
    component: MyStackTemplate,
    children: [
        {
            path: 'track',
            name: 'Track',
            component: Track
        },
        {
            path: 'myFollow',
            name: 'MyFollow',
            component: MyFollow
        },
        {
            path: 'myFollow/edit/:id',
            name: 'MyFollowEdit',
            component: MyFollowEdit
        },
        {
            path: 'myFollow/detail',
            name: 'MyFollowDetail',
            component: MyFollowDetail
        },
        {
            path: 'myFollow/cancel/:id',
            name: 'MyFollowCancel',
            component: MyFollowCancel
        },
        {
            path: 'schedule',
            name: 'Schedule',
            component: Schedule
        },
        {
            path: 'schedule/detail',
            name: 'ScheduleDetail',
            component: ScheduleDetail
        }
    ]
}

export default myStake