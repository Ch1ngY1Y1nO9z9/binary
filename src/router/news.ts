import News from '../views/News/Index.vue';
import NewsList from '../views/News/List.vue';
import NewsContent from '../views/News/Content.vue';

const NewsRoutes = {
    path: '/News',
    name: 'News',
    component: News,
    children: [
        {
            path: '/*',
            name: 'NewsList',
            component: NewsList,
            children: [
                {
                    path: '/*',
                    name: 'NewsContent',
                    component: NewsContent
                }
            ]
        }
    ]
}

export default NewsRoutes