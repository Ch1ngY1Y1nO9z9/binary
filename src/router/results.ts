import ResultsTemplate from '../views/Results/Index.vue';
import ResultsList from '/src/components/Results/ResultsList.vue';
import ResultsContent from '/src/components/Results/ResultsContent.vue';
import ResultsSetting from '/src/components/Results/ResultsSetting.vue';

const Results = {
    path: '/member_results',
    name: 'ResultsIndex',
    component: ResultsTemplate,
    children: [
        {
            path: 'index',
            name: 'ResultsList',
            component: ResultsList,
        },
        {
            path: 'detail',
            name: 'ResultsContent',
            component: ResultsContent,
        },
        {
            path: 'follow/setting/:setting',
            name: 'ResultsSetting',
            component: ResultsSetting,
        }
    ]
}

export default Results