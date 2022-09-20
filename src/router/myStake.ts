import MyStackTemplate from '/src/views/MyStack/Index.vue';
import MyFollow from '/src/components/MyStack/MyFollow.vue';
import Track from '/src/components/MyStack/Track.vue';
import Schedule from '/src/components/MyStack/Schedule.vue';


const MyStack = {
    path: '/myStack',
    name: 'MyStack',
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
            path: 'schedule',
            name: 'Schedule',
            component: Schedule
        }
    ]
}

export default MyStack