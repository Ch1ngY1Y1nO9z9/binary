import CollectionTemplate from '/src/views/Collect/Index.vue'
import NewsCollect from '/src/components/Collect/NewsCollection.vue'
import GamesCollect from '/src/components/Collect/GamesCollection.vue'


const Collect = {
    path: '/collect',
    name: 'Collect',
    component: CollectionTemplate,
    children: [
        {
            path: 'news',
            name: 'NewsCollect',
            component: NewsCollect
        },
        {
            path: 'games',
            name: 'GamesCollect',
            component: GamesCollect
        }
    ]
}

export default Collect