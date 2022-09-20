import PurseTemplate from '/src/views/Purse/Index.vue';
import Records from '/src/components/Purse/Records.vue';
import AddValue from '/src/components/Purse/AddValue.vue';
import Transfer from '/src/components/Purse/Transfer.vue';


const Purse = {
    path: '/purse',
    name: 'Purse',
    component: PurseTemplate,
    children: [
        {
            path: 'purseRecords',
            name: 'Records',
            component: Records
        },
        {
            path: 'addValue',
            name: 'AddValue',
            component: AddValue
        },
        {
            path: 'transfer',
            name: 'Transfer',
            component: Transfer
        }
    ]
}

export default Purse