import Index from '../views/News/Index.vue';
import List from '../views/News/List.vue';
import Content from '../views/News/Content.vue';

const NewsIndex = {
    path: '/news',
    name: 'NewsIndex',
    component: Index
}

const NewsList = {
    path: '/news/type',
    name: 'NewsList',
    component: List,
}

const NewsContent = {
    path: '/news/type/content',
    name: 'NewsContent',
    component: Content
}

const News = { NewsIndex, NewsList, NewsContent }

export default News