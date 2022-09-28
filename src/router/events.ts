import EventTemplate from "/src/views/Events/Index.vue";
import Index from "/src/components/Events/Index.vue";

const Events = {
    path: '/events',
    name: 'Events',
    component: EventTemplate,
    children: [
        {
            path: 'index',
            name: 'EventIndex',
            component: Index
        }
    ]
}

export default Events